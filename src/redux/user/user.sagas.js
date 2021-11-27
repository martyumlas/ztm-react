import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.type'
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase'
import { signInWithPopup } from '@firebase/auth'
import { googleSignInFailure, googleSignInSuccess } from './user.actions'
import { getDoc } from '@firebase/firestore'

export function* signInWithGoogle() {
    try {
        const { user } = yield signInWithPopup(auth, googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapShot = yield getDoc(userRef)

        yield put(googleSignInSuccess({id: userSnapShot.id, ...userSnapShot}))
    } catch (error) {
        yield put(googleSignInFailure, error)
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}