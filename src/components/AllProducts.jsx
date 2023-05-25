import React from 'react';
import styles from '../styles/allProducts.module.scss';
import ProductItem from './ProductItem';
import searchIcon from '../img/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Preloader from './Preloader';

const crossBtn = <FontAwesomeIcon icon={faXmark} size='2xs' />;

const AllProducts = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const renderItems = () => {
    console.log(props.cartProducts)
    return (props.isLoading ? Array(10).fill(<Preloader />) : props.data
      .filter((item) => item.fields.name.toLowerCase().includes(searchValue))
      .map(item => (
        <ProductItem key={item.pk}
          id={item.pk}
          name={item.fields.name}
          url={item.fields.image_url}
          price={item.fields.price}
          onFavorite={(obj) => props.onAddToFavorite(obj)}
          onPlus={(obj) => props.onAddToCart(obj)}
          added={props.cartProducts.some(obj => Number(obj.id) === Number(item.pk))}
          loading={props.isLoading}
        />
      )))
  }

  return (
    <section className={styles.allProductsBox}>
      <div className={styles.titleSearch}>
        <h1>{searchValue ? `Seach for: "${searchValue}"` : "OUR PRODUCTS"}</h1>
        <form action="" className={styles.searchBlock}>
          <img src={searchIcon} alt="search icon " />
          <label htmlFor="search"></label>
          <input onChange={onChangeSearchInput} value={searchValue} type="text" name='search' placeholder='Search...' />
          {searchValue && <span onClick={() => { setSearchValue('') }}>{crossBtn}</span>}
        </form>
      </div>

      <div className={styles.gridWrapper}>
        {renderItems()}
      </div>



    </section>
  )
}

export default AllProducts;
