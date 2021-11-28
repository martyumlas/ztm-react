import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.type'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth'
import { signInFailure, signInSuccess} from './user.actions'
import { getDoc } from '@firebase/firestore'

export function* getSnapShotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
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

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession)])
}