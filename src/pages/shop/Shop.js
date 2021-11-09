import React, { Component } from 'react'
import CollectionPreview from '../../components/collection/CollectionPreview';
import data from '../../shop-data'

class Shop extends Component {
    
    constructor() {
        super();
        this.state = {
            collections: data
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {collections.map(collection => (
                    <CollectionPreview key={collection.id} {...collection}/>
                ))}
            </div>
        )
    }
}

export default Shop
