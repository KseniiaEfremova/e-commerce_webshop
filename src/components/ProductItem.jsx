import unlikedHeart from '../img/heart.svg';
// import likedHeart from '../img/heart.svg';
import styles from '../styles/allProducts.module.scss';
import checked from '../img/btn-checked.svg';
import add from '../img/btn-plus.svg';

import { useState } from 'react';




const ProductItem = ({id, name, url, price, onFavorite, onPlus }) => {
    const [isAdded, setIsAdded] = useState(false);
    const onClickPlus = () => {
        onPlus({id, name, url, price});
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src={unlikedHeart} alt="unliked heart" />
            </div>

            <img src={url} alt="" />
            <h5>{name}</h5>
            <button className={styles.viewItem}>View Item</button>
            <div className={styles.cardBottom}>
                <span>Price:<b>£ {price}</b></span>
                {/* <img className={styles.plus} src={checked} alt="checked button" /> */}
                <img onClick={onClickPlus} className={styles.plus} src={isAdded ? checked : add} alt="plus button" />

            </div>
        </div>
    )
}

export default ProductItem;