import React from 'react';
import data from '../products.json';
import '../styles/allProducts.scss';
import ProductItem from './ProductItem';
import searchIcon from '../img/search.svg';

const productItem = data.map(item => (
  <ProductItem key={item.pk.id}
            name={item.fields.name} 
            url={item.fields.image_url} 
            price={item.fields.price} />
 ))

const AllProducts = () => {
  return (
    <section className='all-products-box'>
      <div className='title-search'>
        <h1>OUR PRODUCTS</h1>
        <form action="" className='search-block'>
          <img src={searchIcon} alt="search icon " />
          <label for="search"></label>
          <input type="text" name='search' placeholder='Search...'/>
        </form>
      </div>
      
      <div className='grid-wrapper'>
        {productItem}
      </div>



    </section>
  )
}

export default AllProducts;
