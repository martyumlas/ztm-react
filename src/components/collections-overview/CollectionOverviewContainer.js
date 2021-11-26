import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading:  selectIsFetching,
})

const CollectionsOverviewContainer = compose(    
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview)


export default CollectionsOverviewContainer
