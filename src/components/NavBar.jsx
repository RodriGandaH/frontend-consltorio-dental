import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            AliDent
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" id="links">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pacientes" className="nav-link active" id="links">
                  Pacientes
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search">
              <button className="btn btn-danger" type="submit">
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
