import React from "react";
import CartWidget from "./CartWidget";


export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Distribuidora
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sucursales
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Nosotros
                </a>
              </li>
            </ul>
            <div>
                <CartWidget/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
