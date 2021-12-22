
import './App.css';
import Catagories from './components/Catagories'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Simplecart from './components/simplecart';
import {useSelector} from 'react-redux'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const cartReducer=useSelector((state)=>state.cartReducer)

  return (
    <div className="App">
     
      <Router>
      <Header/>
      <br/>
    <br/>
    <br/>
    <br/>
        
      <Switch>
     <Route exact path='/storefront'>
    
   

    
     
    <Catagories/>
     <Products/>
     </Route>

    <Route  path='/Simplecart'>  <Simplecart />  </Route>
    
    
    
   
    <Route  path='/Details/:id'><Details/></Route>
    </Switch>

    <Footer/>
  
    </Router>

   
    
    </div>
  );
}

export default App;



