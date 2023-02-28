import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div style={{ fontFamily: 'Oswald, sans-serif' }}>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__column">
                        <h3 className="footer__title fw-bold"><i class="bi bi-building"></i> Dirección</h3>
                        <p className="footer__text">Calle Blanca, Rosario, Santa Fe</p>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title fw-bold"><i class="bi bi-clock"></i> Horario</h3>
                        <p className="footer__text">Jueves a Domingo: 6pm - 2am</p>
                        <p className="footer__text">Lunes: 10am - 2pm</p>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title fw-bold"><i class="bi bi-telephone"></i> Contacto</h3>
                        <p className="footer__text">Teléfono: (123) 456-7890</p>
                        <p className="footer__text">Email: alefernandezoficial@gmail.com</p>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title fw-bold"><i class="bi bi-buildings"></i> Ubicación</h3>
                        <div className="footer__map">
                        <p className="footer__text">Wallabi 420 Sydney</p>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__text"><span class="badge text-bg-warning">Design by Alejandro Fernandez</span> <span class="badge text-bg-dark">HTML - CSS - Java - Bootstrap - ReactJS</span> <span class="badge text-bg-warning">© GoatBurger Haus & Co.</span></p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
