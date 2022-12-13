import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'}>Distribuidora</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={'/category/Liquido'}>
              <li className="nav-link">
              Liquido         
              </li>
              </Link>
              <Link to={'/category/Aceitunas'}>
              <li className="nav-link">
              Aceitunas         
              </li>
              </Link>
              <Link to={'/category/Avicola'}>
              <li className="nav-link">
              Avicola         
              </li>
              </Link>
              <Link to={'/category/Secos'}>
              <li className="nav-link">
              Secos      
              </li>
              </Link>
              <Link to={'/category/Enlatados'}>
              <li className="nav-link">
              Enlatados         
              </li>
              </Link>
              <Link to={'/category/Condimentos'}>
              <li className="nav-link">
              Condimentos         
              </li>
              </Link>
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
