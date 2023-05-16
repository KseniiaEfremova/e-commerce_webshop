import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      {/* <Home/> */}
      <AllProducts />
      <Footer />
    </div>
  );
}

export default App;
