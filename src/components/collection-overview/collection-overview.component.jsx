
import React from 'react';
import { useSelector } from 'react-redux';


import { selectCollectionForPreview } from '../../redux/shop/shop.select';
import CollectionPreview from '../collaction-preview/collection-preview';

import './collection-overview.style.scss';



const CollectionOverview = () => {
    const collections = useSelector( state => selectCollectionForPreview(state) );
    
    return (
        <div className="collections-overview">
           { collections.map(({id,  ...otherCollectionsProps}) =>(
                 <CollectionPreview key= {id} {...otherCollectionsProps} />
              )) 
            }
        </div>
    )
}

export default CollectionOverview;