import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";


function Store() {
  const { storeID } = useParams();
  const [singleStore, setStore] = useState({});

  // render all stores
  useEffect(() => {
    fetch(`http://localhost:8000/stores`)
      .then((body) => body.json())
      .then((json) => setStore(() => json)
      );
  }, [storeID]);
  
  console.log(singleStore)

  return (
    <>
      <h1>
        <p>{singleStore.Name}</p>
      </h1>
    </>
  );
};

export default Store;