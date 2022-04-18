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
          <Route path="/stores/:store_id/items/new" element={<StoresIDNew/>}/>
          <Route path="/stores/:store_id/items/:item_id" element={<StoresIDItemID/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
