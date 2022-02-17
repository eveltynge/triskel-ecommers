import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/'></Route> {/*navega a <ItemListContainer />*/}
        <Route exact path='/category/:id'></Route>{/*<ItemListContainer />*/}
        <Route exact path='/item/:id'></Route> {/*navega a <ItemDetailContainer */}
      </Routes>
        <ItemListContainer /> 
  </BrowserRouter>
  );
}

export default App;
