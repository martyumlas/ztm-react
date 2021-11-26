import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import Collection from "../collection/Collection"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"
import { connect } from "react-redux"
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionOverviewContainer"
import CollectionContainer from "../collection/CollectionContainer"


class Shop extends Component {
    
    componentDidMount() {
        this.props.fetchCollectionsStartAsync()
    }

    render() {
        return (
            <div className='shop-page'>
                <Routes>
                    <Route path='/' element={<CollectionsOverviewContainer />} />
                    <Route path=':collectionId' element={<CollectionContainer />}/>
                </Routes>
            </div>
        )
    }
   
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop)
