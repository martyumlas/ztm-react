import ShopActionTypes from "./shop.types";
import { db, convertCollectionSnapShotToMap } from "../../firebase/firebase";
import { collection, onSnapshot } from "@firebase/firestore";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = collection(db, 'collections')
        dispatch(fetchCollectionsStart())
        onSnapshot(collectionRef, (snapShot) => {
            const collectionMap =  convertCollectionSnapShotToMap(snapShot)
            dispatch(fetchCollectionsSuccess(collectionMap))
        }, error => {
            dispatch(fetchCollectionsFailure(error.message))
        })
    }
}