import React from 'react';
import styles from '../styles/allProducts.module.scss';
import ProductItem from './ProductItem';
import { useContext } from 'react';
import AppContext from './context';

export default function Favorites(props) {
  const {favorites} = useContext(AppContext);
  console.log(props.items)
    const productItem = favorites
    .filter((item) => item.id)
    .map(item => (
    <ProductItem key={item.id}
              onFavorite={(obj) => props.onAddToFavorite(obj)}
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