import plus from '../img/btn-plus.svg';
import unlikedHeart from '../img/heart.svg';
import likedHeart from '../img/heart.svg';


const ProductItem = (props) => {
    return (
        <div className='product-card'>
            <div className='favorite'>
                <img src={unlikedHeart} alt="unliked heart" />
            </div>

            <img src={props.url} alt="" />
            <h5>{props.name}</h5>
            <div className='card-bottom'>
                <span>Price:<b>{props.price} $</b></span>
                <button><img src={plus} alt="button plus img" /></button>
            </div>
        </div>
    )
}

export default ProductItem;