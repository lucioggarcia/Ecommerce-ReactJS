
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
      </header>
      <body>
        <ItemListContainer/>
       <ItemDetailContainer/>
      </body>
    </div>
  );
}

export default App;
