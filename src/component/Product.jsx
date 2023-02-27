import React from 'react';
import '../styles/Product.css'

const Product = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/product/h1.jpg" class="d-block w-100" alt="promotion1" width="100" height="400"/>
                    <h5>Davy Jones</h5>
                    <p></p>
                    </div>

                    <div class="carousel-item">
                        <img src="images/product/h2.jpg" class="d-block w-100" alt="promotion2" width="100" height="400"/>
                    <h5>Carroñero</h5>
                    <p></p>
                    </div>

                    <div class="carousel-item">
                        <img src="images/product/h3.jpg" class="d-block w-100" alt="promontion3" width="100" height="400"/>
                    <h5>Messias</h5>
                    <p></p>  
                    </div>

                    <div class="carousel-item">
                        <img src="images/product/h4.jpg" class="d-block w-100" alt="promontion3" width="100" height="400"/>
                    <h5>thBloop</h5>
                    <p></p>    
                    </div>

                    <div class="carousel-item">
                        <img src="images/product/h5.jpg" class="d-block w-100" alt="promontion3" width="100" height="400"/>
                    <h5>WhosyourDaddy</h5>
                    <p></p>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
}

export default Product;
