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

export function StoresID(){
  let {store_id } = useParams();
  
  console.log(store_id)

  return (
    <>
      <h1>
         {store_id}
      </h1>
    </>
  );
}

export function StoresIDNew(){

}

export function StoresIDItemID(){

}

export default Store;

