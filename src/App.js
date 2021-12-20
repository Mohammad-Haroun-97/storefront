
import './App.css';
import Catagories from './components/Catagories'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Simplecart from './components/simplecart';
import {useSelector} from 'react-redux'

function App() {
  const cartReducer=useSelector((state)=>state.cartReducer)

  return (
    <div className="App">
     
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>

     {cartReducer.cartFlag && <Simplecart />}  
     
    {!cartReducer.cartFlag && <Catagories/>}
    {!cartReducer.cartFlag && <Products/>}
    <Footer/>
    
    </div>
  );
}

export default App;



