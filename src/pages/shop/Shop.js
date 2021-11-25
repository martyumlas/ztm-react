import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import Collection from "../collection/Collection"
import { convertCollectionSnapShotToMap, db } from "../../firebase/firebase"
import { collection, getDocs, onSnapshot } from "@firebase/firestore"

class Shop extends Component {

    componentDidMount() {

        const collectionRef = collection(db, 'collections')
      
        onSnapshot(collectionRef, (snapShot) => {
            convertCollectionSnapShotToMap(snapShot)
        })
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className='shop-page'>
                <Routes>
                    <Route path='/' element={<CollectionsOverview />} />
                    <Route path=':collectionId' element={<Collection />}/>
                </Routes>
            </div>
        )
    }
  
}

export default Shop
