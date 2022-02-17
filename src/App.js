import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} /> {/*navega a <ItemListContainer />*/}
        <Route exact path='/category/:id' element={<ItemListContainer />} />{/*<ItemListContainer />*/}
        <Route exact path='/item/:id' element={<ItemDetailContainer />} /> {/*navega a <ItemDetailContainer */}
      </Routes>
        <ItemListContainer /> 
  </BrowserRouter>
  );
}

export default App;
