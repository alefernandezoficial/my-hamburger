import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Product.css'


const Product = () => {
    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/product/h1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="images/product/h2.jpg" class="d-block w-100 slide-in" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="images/product/h3.jpg" class="d-block w-100 slide-in" alt="..." />
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};


Product.propTypes = {

};


export default Product;
