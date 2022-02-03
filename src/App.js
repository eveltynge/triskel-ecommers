import './App.css';
import NavBar from './components/NavBar';
import Cart from './assets/cartwidget/cart1.png';

function App() {
  return (
    <>
    <NavBar />
    <Cart imagen={Cart} />
    </>
  );
}

export default App;
