import { useParams } from 'react-router'
import './Collection.scss'
import { selectCollection } from '../../redux/shop/shop.selector'
import { useSelector } from 'react-redux'

const Collection = () => {

    let params = useParams()

    const collection = useSelector(selectCollection(params.collectionId))

    return (
        <div className='collection-page'>
            <h1>{collection.title}</h1>            
        </div>
    )
}


export default Collection

