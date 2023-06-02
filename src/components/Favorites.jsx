import React from 'react';
import styles from '../styles/allProducts.module.scss';
import ProductItem from './ProductItem';

export default function Favorites(props) {
  console.log(props.items)
    const productItem = props.items
    .filter((item) => item.id)
    .map(item => (
    <ProductItem key={item.id}
              onFavorite={(obj) => props.onToggleFavorite(obj)}
              onPlus={(obj) => props.onAddToCart(obj)} 
              favorited={true}
              {...item}
              />
   ))
  return (
    <div>
        <h1>My Favorites</h1>
        <div className={styles.gridWrapper}>
            {productItem}
        </div>
    </div>
  )
};