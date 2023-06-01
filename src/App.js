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
import AppContext from './components/context';


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setcartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  // This `useEffect` hook is used to fetch data from two API endpoints and update the state variables `products` and `cartProducts` accordingly.
  useEffect(() => {
    async function fetchData() {
      const productsResponse = await axios.get('https://64674fcfba7110b663b4f74d.mockapi.io/products');
      const cartResponse = await axios.get('https://64674fcfba7110b663b4f74d.mockapi.io/cart');

      setIsLoading(false);
      setProducts(productsResponse.data);
      setCartProducts(cartResponse.data);
    }
    fetchData();
  }, [])

  const onAddToCart = (obj) => {
    if ((cartProducts).find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://64674fcfba7110b663b4f74d.mockapi.io/cart/${obj.id}`);
      setCartProducts(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://64674fcfba7110b663b4f74d.mockapi.io/cart', obj);
      setCartProducts(prev => [...prev, obj]);
    }
    console.log(cartProducts)
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

  const isItemAdded = (id) => {
    return cartProducts.some((obj) => Number(obj.id) === Number(id));
    // props.cartProducts.some(obj => Number(obj.id) === Number(item.pk))
  }

  return (
    <AppContext.Provider value={{ products, cartProducts, favorites, isItemAdded, onAddToFavorite }}>
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
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading} />}>
          </Route>
          <Route path='/favorites' element={
            <Favorites />}></Route>
        </Routes>
        <Footer categories={categories} />
      </div>
    </AppContext.Provider>

  );
}

export default App;
