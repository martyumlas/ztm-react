import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import Collection from "../collection/Collection"
import { convertCollectionSnapShotToMap, db } from "../../firebase/firebase"
import { collection, onSnapshot } from "@firebase/firestore"
import { updateCollections } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"
import { useDispatch } from "react-redux"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

const Shop = () =>  {
    
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = collection(db, 'collections')
      
        onSnapshot(collectionRef, (snapShot) => {
            const collectionMap =  convertCollectionSnapShotToMap(snapShot)
            dispatch(updateCollections(collectionMap))
            setLoading(false)
        })
    }, [dispatch])

 
    return (
        <div className='shop-page'>
            <Routes>
                <Route path='/' element={<CollectionsOverviewWithSpinner  isLoading={loading} />} />
                <Route path=':collectionId' element={<CollectionPageWithSpinner isLoading={loading} />}/>
            </Routes>
        </div>
    )
}



export default Shop
