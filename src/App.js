import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Swal from 'sweetalert2'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <ItemListContainer greeting={'Diego!'}/>
      </div>
    </div>
  );
}

export default App;
