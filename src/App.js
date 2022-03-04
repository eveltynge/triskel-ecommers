import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreProvider from './components/CartContext';


function App() {
  return (
  <StoreProvider>
  <Router>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} /> 
          <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} /> 
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
      </StoreProvider>
  );
}

export default App;
