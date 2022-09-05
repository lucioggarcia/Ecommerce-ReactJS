
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
      </header>
      <body>
        <ItemListContainer/>
        <ItemCount stock={10} initial={0} />
      </body>
    </div>
  );
}

export default App;
