import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const styleVar = {
  color: "white",
  backgroundColor: "black",
  textAlign: "center",
  padding: "10px",
  fontFamily: "Arial"
};

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
  const { store_id } = useParams();

  function submit(event){
      event.preventDefault();
      const info = new FormData(event.target);
      const value = Object.fromEntries(info.entries());
      let id = info.get("id")
      const request = {
        method: 'PUT',
        body: JSON.stringify(value)
      };
      fetch(`http://localhost:8000/stores/${store_id}/items/${id}`,request);
      console.log({request});
  }

  return(
  <div style={styleVar}>
    <form onSubmit={submit}>
      <label>
        Name:
        <input type="text" name="name" />
        <br/>
        Quantity:
        <input type="number" name="quantity" />
        <br/>
        Price:
        <input type="number" name="price" />
        <br/>
        ID:
        <input type="number" name="id" />
        <br/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )


}

export function StoresIDItemID(){

}

export default Store;

