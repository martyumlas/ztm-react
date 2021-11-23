import { Routes, Route, useMatch} from "react-router-dom"
import Collection from "../collection/Collection"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"

const Shop = () => {
    const match = useMatch('/shop')

    console.log(match)
    return (
        <div className='shop-page'>
            {match && <CollectionsOverview />}
            <Routes>
                <Route path=':collectionId' element={<Collection />}/>
            </Routes>
        </div>
    )
}

export default Shop
