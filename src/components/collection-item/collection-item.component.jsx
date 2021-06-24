
import './collection-item.style.scss';

const CollectionItem = ({ id, name, price, imgurl}) => (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imgurl})`}} />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>Rs: {price}</span>
        </div>

    </div>
)

export default CollectionItem;