import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from "./stores.js";

import { StoreIDItem } from "./stores.js";
import { StoresIDNew } from "./stores.js";
import { StoresIDItemID } from "./stores.js";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/stores" element={<Store/>}/>

          <Route path="/stores/:store_id" element={<StoreIDItem/>}/>
          <Route path="/stores/:store_id/items/new" element={<StoresIDNew/>}/>
          <Route path="/stores/:store_id/items/:item_id" element={<StoresIDItemID/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
