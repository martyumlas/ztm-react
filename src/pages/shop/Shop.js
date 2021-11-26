import { Component } from "react"
import { Routes, Route} from "react-router-dom"
import { connect } from "react-redux"
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionOverviewContainer"
import CollectionContainer from "../collection/CollectionContainer"
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'


class Shop extends Component {
    
    componentDidMount() {
        this.props.fetchCollectionsStart()
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
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)
