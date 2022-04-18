import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from "./stores.js";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/stores" element={<Store/>}/>
          <Route path="/stores/:store_id" element=
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
