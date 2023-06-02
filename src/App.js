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
  const [isLoading, setIsLoading] = useState(true);

  const products_url = 'https://64674fcfba7110b663b4f74d.mockapi.io/products';
  const cart_url = 'https://64674fcfba7110b663b4f74d.mockapi.io/cart';
  const favorites_url = 'https://64707a693de51400f7245522.mockapi.io/favorites';


  // This `useEffect` hook is used to fetch data from two API endpoints and update the state variables `products` and `cartProducts` accordingly.
  useEffect(() => {
    async function fetchData() {
      const productsResponse = await axios.get(products_url);
      const cartResponse = await axios.get(cart_url);
      const favoritesResponse = await axios.get(favorites_url);

      setIsLoading(false);
      setProducts(productsResponse.data);
      setCartProducts(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }
    fetchData();
  }, [])

  const onAddToCart = (obj) => {
    if ((cartProducts).find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(cart_url +'/' + obj.id);
      setCartProducts(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post(cart_url, obj);
      setCartProducts(prev => [...prev, obj]);
    }
    console.log(cartProducts)
  };


  const onToggleFavorite = async (obj) => {
    if (obj.name) {
      try {
        if ((favorites).find(item => Number(item.id) === Number(obj.id))) {
          axios.delete(favorites_url + '/' + obj.id);
          setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
          const { data } = await axios.post(favorites_url, obj);
          setFavorites(prev => [...prev, data]);
        }
      } catch (error) {
        console.error("Error while adding to favourites: ", error);
      }
    };
  }

  // This function is used to remove an item from the cart based on its ID.
  const onRemoveFromCart = (objId) => {
    axios.delete(cart_url + '/' + objId);
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
            cartProducts={cartProducts}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isLoading={isLoading} />}>
        </Route>
        <Route path='/favorites' element={
          <Favorites items={favorites}
            onToggleFavorite={onToggleFavorite} />}></Route>
      </Routes>
      <Footer categories={categories} />
    </div>
  );
}

export default App;
