import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} /> 
        <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} /> 
        <Route path='/cart' element={<Cart />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
