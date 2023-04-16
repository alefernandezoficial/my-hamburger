import React from 'react'
import '../styles/Banner.css';

import B1 from "../assets/images/banner/burger/b1.jpg";
import B2 from "../assets/images/banner/burger/b2.jpg";
import B3 from "../assets/images/banner/burger/b3.jpg";

import D1 from "../assets/images/banner/drink/d1.jpg";
import D2 from "../assets/images/banner/drink/d2.jpg";
import D3 from "../assets/images/banner/drink/d3.jpg";

function Banner() {
    return (
        <div>
            <div className="container text-center">
                <div className="row flex-wrap justify-content-center">
                    <div className="col-md-6 flex-row">
                        <div id="burger-carousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={B1} className="banner-img" alt="banner1" />
                                    <div className="overlay">
                                        <div style={{ fontFamily: 'Oswald, sans-serif' }}><h3>Davy Jones</h3>
                                            <i className="bi bi-egg-fried"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={B2} className="banner-img" alt="banner2" />
                                    <div className="overlay">
                                        <div style={{ fontFamily: 'Oswald, sans-serif' }}><h3>Carroñero</h3>
                                            <i className="bi bi-egg-fried"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={B3} className="banner-img" alt="banner3" />
                                    <div className="overlay">
                                        <div style={{ fontFamily: 'Oswald, sans-serif' }}><h3>Messias</h3>
                                            <i className="bi bi-egg-fried"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 flex-row">
                        <div id="drink-carousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={D1} className="banner-img" alt="banner4" />
                                    <div className="overlay">
                                        <div style={{ fontFamily: 'Oswald, sans-serif' }}><h3>Bebidas Artesanales</h3>
                                            <i className="bi bi-cup-straw"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={D2} className="banner-img" alt="banner5" />
                                    <div className="overlay">
                                        <div style={{ fontFamily: 'Oswald, sans-serif' }}><h3>La mejor de la empresa</h3>
                                            <i className="bi bi-cup-straw"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={D3} className="banner-img" alt="banner6" />
                                    <div className="overlay">
                                        <div style={{ fontFamily: 'Oswald, sans-serif' }}><h3>La unica e inigualable</h3>
                                            <i className="bi bi-cup-straw"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
