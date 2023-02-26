import React from 'react'

function Banner() {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/banner/burger/b1.avif" class="d-block w-100" alt="banner1" height="400" width="720" />
                                    <div class="overlay">
                                        <h3>Davy Jones</h3>
                                        <i class="bi bi-egg-fried"></i>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/banner/burger/b2.avif" class="d-block w-100" alt="banner2" height="400" width="720" />
                                    <div class="overlay">
                                        <h3>Carroñero</h3>
                                        <i class="bi bi-egg-fried"></i>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/banner/burger/b3.avif" class="d-block w-100" alt="banner3" height="400" width="720" />
                                    <div class="overlay">
                                        <h3>Messias</h3>
                                        <i class="bi bi-egg-fried"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/banner/drink/d1.webp" class="d-block w-100" alt="banner4" height="400" width="720" />
                                    <div class="overlay">
                                        <h3>Bebidas Artesanales</h3>
                                        <i class="bi bi-cup-straw"></i>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/banner/drink/d2.jpeg" class="d-block w-100" alt="banner5" height="400" width="720" />
                                    <div class="overlay">
                                        <h3>La mejor de la empresa</h3>
                                        <i class="bi bi-cup-straw"></i>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/banner/drink/d3.jpg" class="d-block w-100" alt="banner6" height="400" width="720" />
                                    <div class="overlay">
                                        <h3>La unica e inigualable</h3>
                                        <i class="bi bi-cup-straw"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
