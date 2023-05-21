import React from 'react';
import styles from '../styles/allProducts.module.scss';
import ProductItem from './ProductItem';
import searchIcon from '../img/search.svg';
import { useState } from 'react';



const AllProducts = (props) => {
  
  const productItem = props.data.map(item => (
    <ProductItem key={item.pk}
              id={item.pk}
              name={item.fields.name} 
              url={item.fields.image_url} 
              price={item.fields.price}
              onFavorite={() => {console.log("Added to Favorite")}}
              onPlus={(obj) => props.onAddToCart(obj)} 
              />
   ))
  return (
    <section className={styles.allProductsBox}>
      <div className={styles.titleSearch}>
        <h1>OUR PRODUCTS</h1>
        <form action="" className={styles.searchBlock}>
          <img src={searchIcon} alt="search icon " />
          <label htmlFor="search"></label>
          <input type="text" name='search' placeholder='Search...'/>
        </form>
      </div>
      
      <div className={styles.gridWrapper}>
        {productItem}
      </div>



    </section>
  )
}

export default AllProducts;
