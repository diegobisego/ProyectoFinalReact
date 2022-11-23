import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Bienvenido {greeting}!</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default ItemListContainer;
