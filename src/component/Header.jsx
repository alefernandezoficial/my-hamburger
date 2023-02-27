import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
            <>
            <div className='header-overlay'>
                <div>
                    <div>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/responsive2.jpg" className="d-block w-100" alt="imagen1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/responsive2.jpg" className="d-block w-100" alt="imagen2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/responsive2.jpg" className="d-block w-100" alt="imagen3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </>
    );
}

export default Header;
