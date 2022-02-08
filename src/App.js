import './App.css';
import Navegador from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navegador />
      <ItemListContainer />
    </div>
  );
}
export default App;