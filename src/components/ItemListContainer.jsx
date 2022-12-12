import React from "react";
import ItemsList from "./ItemsList";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Bienvenido {greeting}!</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <ItemsList/> 
    </div>
  );
}

export default ItemListContainer;
