import unlikedHeart from '../img/unliked.svg';
import likedHeart from '../img/liked.svg';
import styles from '../styles/allProducts.module.scss';
import checked from '../img/btn-checked.svg';
import add from '../img/btn-plus.svg';
import { useState, useContext } from 'react';
import AppContext from '../components/context';


const ProductItem = ({ 
  id,
  name,
  url,
  price,
  onFavorite,
  onPlus,
  favorited = false}) => {

  const {isItemAdded} = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, name, url, price });
  };

  const onClickFavorite = () => {
    console.log({ id, name, url, price })
    onFavorite({ id, name, url, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img onClick={onClickFavorite} src={isFavorite ? likedHeart : unlikedHeart} alt="unliked heart" />
      </div>

      <img src={url} alt="" />
      <h5>{name}</h5>
      <button className={styles.viewItem}>View Item</button>
      <div className={styles.cardBottom}>
        <span>Price:<b>£ {price}</b></span>
        <img onClick={onClickPlus} className={styles.plus} src={isItemAdded(id) ? checked : add} alt="plus button" />
      </div>
    </div>
  )
}

export default ProductItem;