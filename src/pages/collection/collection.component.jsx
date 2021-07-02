
import React from 'react';
import { useSelector } from 'react-redux';

import './collection.style.scss';

import { selectCollection } from '../../redux/shop/shop.select';
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectioPage = ({match}) => {
   
    const collection = useSelector( state => selectCollection(match.params.collectionId)(state));

    const { title, items} =collection
    console.log(collection);
    return(
    <div className="collection-page">
        <h1 className='title'>{title}</h1>
        <div className="items">
            {
               items.map( item => (
                   <CollectionItem key={item.id} item={item} />
               ) )
            }
        </div>
    </div>
    )
}

export default CollectioPage;