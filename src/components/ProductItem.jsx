import ContentLoader from 'react-content-loader';
import unlikedHeart from '../img/unliked.svg';
import likedHeart from '../img/liked.svg';
import styles from '../styles/allProducts.module.scss';
import checked from '../img/btn-checked.svg';
import add from '../img/btn-plus.svg';
import { useState } from 'react';


const ProductItem = ({ id,
  name,
  url,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false }) => {

  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, name, url, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, name, url, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.productCard}>
      {loading ?
        <ContentLoader
          speed={2}
          width={215}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#00040722"
          foregroundColor="#0004076b">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> :
        <>
          <div className={styles.favorite} onClick={onFavorite}>
            <img onClick={onClickFavorite} src={isFavorite ? likedHeart : unlikedHeart} alt="unliked heart" />
          </div>

          <img src={url} alt="" />
          <h5>{name}</h5>
          <button className={styles.viewItem}>View Item</button>
          <div className={styles.cardBottom}>
            <span>Price:<b>£ {price}</b></span>
            {/* <img className={styles.plus} src={checked} alt="checked button" /> */}
            <img onClick={onClickPlus} className={styles.plus} src={isAdded ? checked : add} alt="plus button" />

          </div>
        </>}


    </div>
  )
}

export default ProductItem;