import React from 'react';
import styles from '../styles/allProducts.module.scss';
import ProductItem from './ProductItem';

export default function Favorites(props) {
  console.log(props.items)
    const productItem = props.items
    .filter((item) => item.id)
    .map(item => (
    <ProductItem key={item.id}
              id={item.id}
              name={item.name} 
              url={item.url} 
              price={item.price}
              onFavorite={(obj) => props.onAddToFavorite(obj)}
              onPlus={(obj) => props.onAddToCart(obj)} 
              favorited={true}
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