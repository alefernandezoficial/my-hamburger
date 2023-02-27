import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="images/nobk2.png" alt="Logo" width="100" height="100" class="d-inline-block align-text-top"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center fs-5 fw-bold" id="navbarNav">
            <ul class="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#"><i className="bi bi-house"></i> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-microsoft-teams"></i> Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-person-rolodex"></i> Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-cart3"></i> Store</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
