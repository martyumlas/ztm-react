import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import Collection from "../collection/Collection"
import { convertCollectionSnapShotToMap, db } from "../../firebase/firebase"
import { collection, onSnapshot } from "@firebase/firestore"
import { connect } from "react-redux"
import { updateCollections } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)

class Shop extends Component {
    
    state = {
        loading: false
    }

    unsubscribeFromSnapShot = null

    componentDidMount() {

        const collectionRef = collection(db, 'collections')
      
        this.unsubscribeFromSnapShot = onSnapshot(collectionRef, (snapShot) => {
            const collectionMap =  convertCollectionSnapShotToMap(snapShot)

            this.props.updateCollections(collectionMap)
            this.setState({loading: false})
        })
    }

    componentWillUnmount() {
        
    }

    render() {
        const {loading} = this.state

        return (
            <div className='shop-page'>
                <Routes>
                    <Route path='/' element={<CollectionsOverviewWithSpinner isLoading={loading}  />} />
                    <Route path=':collectionId' element={<Collection isLoading={loading} />}/>
                </Routes>
            </div>
        )
    }
  
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop)
