import { useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import Collection from "../collection/Collection"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"
import { useDispatch, useSelector } from "react-redux"
import { selectIsFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

const Shop = () =>  {
    
    const isFetching = useSelector(selectIsFetching)

    const isCollectionLoaded  = useSelector(selectIsCollectionLoaded)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollectionsStartAsync())
    }, [dispatch])

    return (
        <div className='shop-page'>
            <Routes>
                <Route path='/' element={<CollectionsOverviewWithSpinner  isLoading={isFetching} />} />
                <Route path=':collectionId' element={<CollectionPageWithSpinner  isLoading={!isCollectionLoaded} />}/>
            </Routes>
        </div>
    )
}



export default Shop
