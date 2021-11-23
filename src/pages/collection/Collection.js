import { useParams } from 'react-router'
import './Collection.scss'
import { selectCollection } from '../../redux/shop/shop.selector'
import { useSelector } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'

const Collection = () => {

    let params = useParams()

    const collection = useSelector(selectCollection(params.collectionId))

    const {title, items} = collection

    return (
        <div className='collection-page'>
            <h1>{title}</h1>       
            <div className="items">
                {
                    items.map(item => <CollectionItem item={item} key={item.id}/>)
                }    
            </div>     
        </div>
    )
}


export default Collection

