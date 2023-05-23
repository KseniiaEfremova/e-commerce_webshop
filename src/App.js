import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import categories from './categories.json';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Favorites from './components/favorites';


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setcartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://64674fcfba7110b663b4f74d.mockapi.io/products').then(res => {
      setProducts(res.data);
    });
    axios.get('https://64674fcfba7110b663b4f74d.mockapi.io/cart').then(res => {
      setCartProducts(res.data);
    });
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64674fcfba7110b663b4f74d.mockapi.io/cart', obj);
    if (!cartProducts.includes(obj)) {
      setCartProducts(prev => [...prev, obj]);
    }
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://64674fcfba7110b663b4f74d.mockapi.io/favorites', obj);
    if (!cartProducts.includes(obj)) {
      setFavorites(prev => [...prev, obj]);
    }
  };

  const onRemoveFromCart = (objId) => {
    axios.delete(`https://64674fcfba7110b663b4f74d.mockapi.io/cart/${objId}`);
    setCartProducts(prev => prev.filter(item => item.id !== objId));
  };

  return (
    <div className='wrapper'>
      {cartOpened && 
      <Cart products={cartProducts}
            onRemoveFromCart={onRemoveFromCart}
            onCloseCart={() => setcartOpened(false)} />}
      <Header onClickCart={() => setcartOpened(true)} />
      <Routes>
        <Route path='/home' element={<Home data={products} />}></Route>
        <Route path='/products' element={
          <AllProducts data={products}
                      onAddToCart={onAddToCart}
                      onAddToFavorite={onAddToFavorite} />}></Route>
        <Route path='/favorites' element={<Favorites data={products} />}></Route>
      </Routes>
      <Footer categories={categories} />
    </div>
  );
}

export default App;
