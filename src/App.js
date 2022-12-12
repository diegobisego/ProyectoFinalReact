import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemsList from "./components/ItemsList";
import ItemsDetails from "./components/ItemsDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
      <Routes>
          <Route path="/item/:id" element={<ItemsDetails/>}/>
          <Route/>
          <Route/>
      </Routes>
        <div className="container">
          <ItemListContainer greeting={"Diego!"} />
          <ItemsDetails />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
