import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import productsData from "./products.json";
import categories from './categories.json';


function App() {
  return (
    <div className='wrapper'>
      < Cart />
      <Header />
      {/* <Home data={productsData}/> */}
      <AllProducts data={productsData}/>
      <Footer categories={categories}/>
    </div>
  );
}

export default App;
