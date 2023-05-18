import unlikedHeart from '../img/heart.svg';
// import likedHeart from '../img/heart.svg';
import styles from '../styles/allProducts.module.scss';
import checked from '../img/btn-checked.svg';
import add from '../img/btn-plus.svg';

import { useState } from 'react';




const ProductItem = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src={unlikedHeart} alt="unliked heart" />
            </div>

            <img src={props.url} alt="" />
            <h5>{props.name}</h5>
            <button className={styles.viewItem}>View Item</button>
            <div className={styles.cardBottom}>
                <span>Price:<b>£ {props.price}</b></span>
                {/* <img className={styles.plus} src={checked} alt="checked button" /> */}
                <img onClick={onClickPlus} className={styles.plus} src={isAdded ? checked : add} alt="plus button" />

            </div>
        </div>
    )
}

export default ProductItem;