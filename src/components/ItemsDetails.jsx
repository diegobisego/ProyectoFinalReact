import React, { useEffect, useState } from "react";
import { products } from "../data/products";
import { useParams } from 'react-router-dom';
import ItemCount from "./ItemCount";
import AddtoCart from "./AddtoCart";



function ItemsDetails() {
    const [item, setItem] = useState([])
    const {id} = useParams()
  
    useEffect(() => {
    getProduct()
      .then((resp) => {
        setItem(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getProduct = () => {
    return new Promise((resolve, _reject) => {
        const item = products.find(item => item.id === Number(id))
      setTimeout(() => {
        resolve(item);
      }, 2500);
    });
  };

  return (
    <div className="flex">
      <div className="">
        <img className="" alt="" src={item.picture}/>
      </div>
      <div>
        <h2>Detalles del producto: </h2>
        <p className="">Titulo: {item.title}</p>
        <p className="">${item.price}</p>
        <p>
          Stock: <span>{item.stock}</span>
        </p>
        <ItemCount/>
        <AddtoCart/>
      </div>
    </div>
  );
}

export default ItemsDetails;
