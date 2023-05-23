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
import Favorites from './components/Favorites';


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setcartOpened] = useState(false);

  useEffect(() => {
    // This `useEffect` hook is used to fetch data from two API endpoints and update the state variables `products` and `cartProducts` accordingly.
    axios.get('https://64674fcfba7110b663b4f74d.mockapi.io/products').then(res => {
      setProducts(res.data);
    });
    axios.get('https://64674fcfba7110b663b4f74d.mockapi.io/cart').then(res => {
      setCartProducts(res.data);
    });
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64674fcfba7110b663b4f74d.mockapi.io/cart', obj);
    setCartProducts(prev => {
      // Check if the item already exists in cart
      if (!prev.some(item => item.id === obj.id)) {
        // If it doesn't exist, add it to the cart array
        return [...prev, obj];
      }
      // If it already exists, return the unchanged cart array
      return prev;
    });
  };

  const onAddToFavorite = (obj) => {
    setFavorites(prev => {
      // Check if the item already exists in favorites
      if (!prev.some(item => item.id === obj.id)) {
        // If it doesn't exist, add it to the favorites array
        return [...prev, obj];
      }
      // If it already exists, return the unchanged favorites array
      return prev;
    });

  };

// This function is used to remove an item from the cart based on its ID.
  const onRemoveFromCart = (objId) => {
    axios.delete(`https://64674fcfba7110b663b4f74d.mockapi.io/cart/${objId}`);
    // Update the cartProducts state by filtering out the item with the matching ID
    setCartProducts(prev => prev.filter(item => item.id !== objId));
  };

  return (
    <div className='wrapper'>
      {/* Render the Cart component only if cartOpened is true */}
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
        <Route path='/favorites' element={
          <Favorites items={favorites} 
                    onAddToFavorite={onAddToFavorite} />}></Route>
      </Routes>
      <Footer categories={categories} />
    </div>
  );
}

export default App;
