
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='Hola, esto es la entrega de un desafio' />
        <ItemCount stock={10} initial={0} />
      </header>
    </div>
  );
}

export default App;
