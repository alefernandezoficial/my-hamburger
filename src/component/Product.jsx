import React from 'react';
import '../styles/Product.css'

const Product = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/product/h1.jpg" className="d-block w-100 product-banner" alt="promotion1" />
                        <div className="overlay">
                            <h3>Davy Jones</h3>
                            <i className="bi bi-egg-fried"></i>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/product/h2.jpg" className="d-block w-100 product-banner" alt="promotion2" />
                        <div className="overlay">
                            <h3>Carroñero</h3>
                            <i className="bi bi-egg-fried"></i>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/product/h3.jpg" className="d-block w-100 product-banner" alt="promontion3" />
                        <div className="overlay">
                            <h3>El messias</h3>
                            <i className="bi bi-egg-fried"></i>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/product/h4.jpg" className="d-block w-100 product-banner" alt="promontion3" />
                        <div className="overlay">
                            <h3>thBloop</h3>
                            <i className="bi bi-egg-fried"></i>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/product/h5.jpg" className="d-block w-100 product-banner" alt="promontion3" />
                        <div className="overlay">
                            <h3>Whosyourdaddy</h3>
                            <i className="bi bi-egg-fried"></i>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}

export default Product;
