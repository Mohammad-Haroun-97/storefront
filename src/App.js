
import './App.css';
import Catagories from './components/Catagories'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     
    <Header/>
    <Catagories/>
    <Products/>
    <Footer/>
    
    </div>
  );
}

export default App;
