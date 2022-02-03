import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/cartwidget';
import Imagen from './assets/cartwidget/cart1.png';

function App() {
  return (
    <>
    <NavBar />
    <Cart imagen={Imagen} />
    </>
  );
}

export default App;
