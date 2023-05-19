import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import productsData from "./products.json";
import categories from './categories.json';
import { useEffect, useState } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])
  const [cartOpened, setcartOpened] = useState(false);

  useEffect(() => {
      fetch('https://64674fcfba7110b663b4f74d.mockapi.io/products')
  .then(res => {
        return res.json();
      })
  .then((json) => {
    setProducts(json);
  })
  }, [])

  const onAddToCart = (obj) => {
    setCartProducts([...cartProducts, obj]);
  };

  console.log(cartProducts);
  return (
    <div className='wrapper'>
      { cartOpened && <Cart products={cartProducts} 
                            onAddToCart={onAddToCart} 
                            onCloseCart={() => setcartOpened(false)}/>}
      <Header onClickCart={() => setcartOpened(true)}/>
      {/* <Home data={productsData}/> */}
      <AllProducts data={products} 
                  onAddToCart={onAddToCart}/>
      <Footer categories={categories}/>
    </div>
  );
}

export default App;
