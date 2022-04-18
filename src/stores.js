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
  }, []);
  
  console.log(stores);

  return (
    <>
      <h1>
         <div>{stores.map((store) => (<p key={store._id}>{store.name}</p>))}</div>
      </h1>
    </>
  );
};

export function StoresIDItem(){
  let {store_id} = useParams();
  const [items, setItems] = useState([]);

  // render all stores
  useEffect(() => {
    fetch(`http://localhost:8000/stores/${store_id}/items`)
      .then((body) => body.json())
      .then((json) => setItems(() => [...json]));
  }, [store_id]);
  
  console.log(items);

  return (
    <>
      <h1>
         <div>{items.map((item) => (<p key={item._id}>{item.name}</p>))}</div>
      </h1>
    </>
  );
}

export function StoresIDNew(){

}

export function StoresIDItemID(){

}

export default Store;

