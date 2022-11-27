import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { Navbar } from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting={"Hola Florencia"}/>
    </div>
  );
}

export default App;
