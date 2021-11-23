import './CollectionsOverview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection/CollectionPreview'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
                {collections.map(collection => (
                <CollectionPreview key={collection.id} {...collection}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
