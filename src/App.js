
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="App">
          <NavBar />
          <Routes>

            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/tienda' element={ <ItemListContainer/>}/>
            <Route path='/tienda/:categoryId' element={ <ItemListContainer/>}/>
            <Route path='/item/:productId' element={ <ItemDetailContainer/>}/>
            <Route path='/carrito' element={<CartContainer/>}/>
          </Routes>
  
        </div>

      </BrowserRouter>
      <Footer/>

    </CartProvider>
    
    

    
  );
}

export default App;
