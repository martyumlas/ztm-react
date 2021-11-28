import { takeLatest, call, put, all } from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import { db, convertCollectionSnapShotToMap } from '../../firebase/firebase'
import { collection, getDocs } from '@firebase/firestore'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

export function* fetchCollectionsStartAsync() {
    try {        
        const collectionRef = collection(db, 'collections')
        const snapshot = yield getDocs(collectionRef)
        //call is a saga function for external methods like this
        const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot)
        //dispatch is not used but put is used instead
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}