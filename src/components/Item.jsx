import React from "react";
import { Link } from "react-router-dom";

function Item({id,title,price,picture}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img className="img-thumbnail" alt={title} src={picture} />
      <p className="">Precio: ${price}</p>
      <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
    </div>
  );
}

export default Item;
