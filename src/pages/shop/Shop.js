import CollectionPreview from '../../components/collection/CollectionPreview';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux'

const Shop = ({collections}) => {

    return (
        <div className='shop-page'>
            {collections.map(collection => (
                <CollectionPreview key={collection.id} {...collection}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(Shop)
