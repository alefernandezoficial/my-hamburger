import React from 'react';
import '../styles/Banner.css'

const Banner = () => {
    return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/banner/burger/b1.avif" className="d-block w-100" alt="banner1" height="400" width="720" />
                                        <div className="overlay">
                                            <h3>Davy Jones</h3>
                                            <i className="bi bi-egg-fried"></i>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/banner/burger/b2.avif" className="d-block w-100" alt="banner2" height="400" width="720" />
                                        <div className="overlay">
                                            <h3>Carroñero</h3>
                                            <i className="bi bi-egg-fried"></i>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/banner/burger/b3.avif" className="d-block w-100" alt="banner3" height="400" width="720" />
                                        <div className="overlay">
                                            <h3>Messias</h3>
                                            <i className="bi bi-egg-fried"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/banner/drink/d1.webp" className="d-block w-100" alt="banner4" height="400" width="720" />
                                        <div className="overlay">
                                            <h3>Bebidas Artesanales</h3>
                                            <i className="bi bi-cup-straw"></i>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/banner/drink/d2.jpeg" className="d-block w-100" alt="banner5" height="400" width="720" />
                                        <div className="overlay">
                                            <h3>La mejor de la empresa</h3>
                                            <i className="bi bi-cup-straw"></i>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/banner/drink/d3.jpg" className="d-block w-100" alt="banner6" height="400" width="720" />
                                        <div className="overlay">
                                            <h3>La unica e inigualable</h3>
                                            <i className="bi bi-cup-straw"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default Banner;
