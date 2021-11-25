import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import Collection from "../collection/Collection"
import { convertCollectionSnapShotToMap, db } from "../../firebase/firebase"
import { collection, onSnapshot } from "@firebase/firestore"
import { connect } from "react-redux"
import { updateCollections } from "../../redux/shop/shop.actions"

class Shop extends Component {

    componentDidMount() {

        const collectionRef = collection(db, 'collections')
      
        onSnapshot(collectionRef, (snapShot) => {
          const collectionMap =  convertCollectionSnapShotToMap(snapShot)

          this.props.updateCollections(collectionMap)
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

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop)
