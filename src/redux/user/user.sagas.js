import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.type'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from '@firebase/auth'
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess} from './user.actions'
import { getDoc } from '@firebase/firestore'

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapShot = yield getDoc(userRef)

        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot}))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield signInWithPopup(auth, googleProvider)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}


export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSignOut() {
    try {
        yield signOut(auth)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure())
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, userSignOut)
}

export function* signInAfterSignUp({payload : {user, additionalData}}) {
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password)
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(signUpFailure())
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}