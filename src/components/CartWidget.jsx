import React from "react";
import carritoImagen from './../assets/img/carrito.jpg'

const CartWidget = () => {
  return (
    <div>
      <button class="btn btn-outline-success" type="button">
        <img src={carritoImagen} alt="" />
      </button>
    </div>
  );
};

export default CartWidget;
