import plus from '../img/btn-plus.svg';
import unlikedHeart from '../img/heart.svg';
// import likedHeart from '../img/heart.svg';
import styles from '../styles/allProducts.module.scss';


const ProductItem = (props) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.favorite}>
                <img src={unlikedHeart} alt="unliked heart" />
            </div>

            <img src={props.url} alt="" />
            <h5>{props.name}</h5>
            <div className={styles.cardBottom}>
                <span>Price:<b>£ {props.price}</b></span>
                <button onClick={props.onClick}>
                    <img src={plus} alt="button plus img" />
                </button>
            </div>
        </div>
    )
}

export default ProductItem;