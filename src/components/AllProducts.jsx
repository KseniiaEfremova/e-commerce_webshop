import React from 'react';
import data from '../products.json';
import '../styles/allProducts.css';

// const product = data.map(item => (
//   <ProductItem key={item.pk.id}
//             name={item.fields.name} 
//             url={item.fields.image_url} 
//             description={item.fields.description} />
//  ))

const AllProducts = () => {
  return (
    <section className='all-products-box'>
      <h1>OUR PRODUCTS</h1>
      <div className='grid-wrapper'>
        <div className='product-card'>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp" alt="" />
          <h5>Arizona Original Bootcut Jeans</h5>
          <div className='card-bottom'>
            <span>Price:<b>23.45 $</b></span>
            <button>+</button>
          </div>
        </div>
        <div className='product-card'>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp" alt="" />
          <h5>Arizona Original Bootcut Jeans</h5>
          <div className='card-bottom'>
            <span>Price:<b>23.45 $</b></span>
            <button>+</button>
          </div>
        </div>
        <div className='product-card'>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp" alt="" />
          <h5>Arizona Original Bootcut Jeans</h5>
          <div className='card-bottom'>
            <span>Price:<b>23.45 $</b></span>
            <button>+</button>
          </div>
        </div>
        <div className='product-card'>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp" alt="" />
          <h5>Arizona Original Bootcut Jeans</h5>
          <div className='card-bottom'>
            <span>Price:<b>23.45 $</b></span>
            <button>+</button>
          </div>
        </div>
        <div className='product-card'>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp" alt="" />
          <h5>Arizona Original Bootcut Jeans</h5>
          <div className='card-bottom'>
            <span>Price:<b>23.45 $</b></span>
            <button>+</button>
          </div>
        </div>
        <div className='product-card'>
          <img src="http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp" alt="" />
          <h5>Arizona Original Bootcut Jeans</h5>
          <div className='card-bottom'>
            <span>Price:<b>23.45 $</b></span>
            <button>+</button>
          </div>
        </div>

        

      </div>



    </section>
  )
}

export default AllProducts;
