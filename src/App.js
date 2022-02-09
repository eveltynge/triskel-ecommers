import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
  <>
    <h2>Triskel Macrame</h2>
    <NavBar />
    <ItemListContainer greeting='Hola visitante' />
    <ItemCount />
  </>
  );
}

export default App;
