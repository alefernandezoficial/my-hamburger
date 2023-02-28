import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
            <>
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
                            <div className='text-header' style={{ fontFamily: 'Oswald, sans-serif' }}>
                                <h1 className='fw-bold'>Homemade & Delicious</h1>
                                <p>Hamburguesas gourmet estilo casero, pensadas para vos</p>
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
            </>
    );
}

export default Header;
