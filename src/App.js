import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from "./stores.js";
import StoreID from "./stores.js";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/stores" element={<Store/>}/>
          <Route path="/stores/:store_id" element={<StoreID/>}/>
          <Route path="/stores/:store_id/items/new" element={<Store/>}/>
          <Route path="/stores/:store_id/items/:item_id" element={<Store/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
