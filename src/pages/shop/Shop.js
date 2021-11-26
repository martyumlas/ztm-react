import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import Collection from "../collection/Collection"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionOverviewContainer"


class Shop extends Component {
    
    componentDidMount() {
        this.props.fetchCollectionsStartAsync()
    }

    render() {
        return (
            <div className='shop-page'>
                <Routes>
                    <Route path='/' element={<CollectionsOverviewContainer />} />
                    <Route path=':collectionId' element={<Collection />}/>
                </Routes>
            </div>
        )
    }
   
}


const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
