import React from 'react'
import '../styles/Navbar.css';

function Navbar() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    
    <div style={{ fontFamily: 'Oswald, sans-serif' }}>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="images/nobk.png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="bi bi-three-dots-vertical"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center fs-5 fw-bold" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" onClick={() => scrollToSection("Home")}><i className="bi bi-house"></i> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("About")}><i className="bi bi-microsoft-teams"></i> Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("Contact")}><i className="bi bi-person-rolodex"></i> Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection("Product")}><i className="bi bi-cart3"></i> Product</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
