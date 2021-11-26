import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview"
import Collection from "../collection/Collection"
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"
import { selectIsFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends Component {
    
    componentDidMount() {
        this.props.fetchCollectionsStartAsync()
    }

    render() {
        const {isCollectionFetching, isCollectionLoaded} = this.props
        return (
            <div className='shop-page'>
                <Routes>
                    <Route path='/' element={<CollectionsOverviewWithSpinner  isLoading={isCollectionFetching} />} />
                    <Route path=':collectionId' element={<CollectionPageWithSpinner  isLoading={!isCollectionLoaded} />}/>
                </Routes>
            </div>
        )
    }
   
}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
