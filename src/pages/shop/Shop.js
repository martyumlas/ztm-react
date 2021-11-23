import { Routes, Route} from "react-router"
import Collection from "../collection/Collection"

const Shop = () => {
    
    return (
        <div className='shop-page'>
            <Routes>
                <Route path=':collectionId' element={<Collection />}/>
            </Routes>
        </div>
    )
}

export default Shop
