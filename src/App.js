import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <Router>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} /> 
        <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} /> 
        <Route path='/cart' element={<Cart />} />
      </Routes>
  </Router>
  );
}

export default App;
