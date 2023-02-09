import { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [dato, setDato] = useState([]);
    /*useEffect (()=>{
      fetch ('https://jsonplaceholder.typicode.com/photos')
      .then ((res) => res.json())
      .then ((res)=> setDato(res))
  },[])*/
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => setDato(res.data));
    }, []);

    console.log(dato);

    return <ItemList dato={dato} />;
};
export default ItemListContainer;
