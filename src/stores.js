import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";


export function Store() {
  const [stores, setStore] = useState([]);

  // render all stores
  useEffect(() => {
    fetch(`http://localhost:8000/stores`)
      .then((body) => body.json())
      .then((json) => setStore(() => [...json]));
  });
  
  console.log(stores)

  return (
    <>
      <h1>
         <div>{stores.map((store) => (<p>{store.name}</p>))}</div>
      </h1>
    </>
  );
};

export function StoresIDItem(){
  
  var [stores, setStores] = useState(
    
  );


  return (
    <div>
      <p>
        {stores}
      </p>
    </div>
  );
}

export function StoresIDNew(){

}

export function StoresIDItemID(){

}

export default Store;

