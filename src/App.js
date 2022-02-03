import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/cartwidget';
import Imagen from './assets/cartwidget/cart1.png';
import ItemListCointainer from './components/ItemListContainer';

function App() {
  return (
  <>
    <h2>Triskel Macrame</h2>
    <Cart imagen={Imagen} />
    <NavBar />
    <ItemListCointainer />
  </>
  );
}

export default App;
