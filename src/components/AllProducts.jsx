import React from 'react';
import data from '../products.json';
import '../styles/allProducts.css';
import ProductItem from './ProductItem';

const productItem = data.map(item => (
  <ProductItem key={item.pk.id}
            name={item.fields.name} 
            url={item.fields.image_url} 
            price={item.fields.price} />
 ))

const AllProducts = () => {
  return (
    <section className='all-products-box'>
      <h1>OUR PRODUCTS</h1>
      <div className='grid-wrapper'>
        {productItem}
      </div>



    </section>
  )
}

export default AllProducts;
