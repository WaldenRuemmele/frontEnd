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

  const { store_id } = useParams();

  return(
  <form>
    <label>
      Name:
      <input type="text" name="name" />
      Fridge Recommended:
      <input type="radio" name="option" value="option1" />
      <input type="radio" name="option" value="option1" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )


}

export function StoresIDItemID(){

}

export default Store;

