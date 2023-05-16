import plus from '../img/btn-plus.svg';


const ProductItem = (props) => {
    return (
        <div className='product-card'>
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