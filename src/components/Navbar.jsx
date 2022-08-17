import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container d-flex justify-content-around">
          <Link className="navbar-brand text-light" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active text-light" aria-current="page" to="/">
                Inicio
              </Link>
              <Link className="nav-link text-light" to="/blog">
                Blog
              </Link>
              <Link className="nav-link text-light" to="/contacto">
                Contacto
              </Link>
            </div>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
