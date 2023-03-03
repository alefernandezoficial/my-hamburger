import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Product.css';

const products = [
    { image: 'images/product/h1.jpg', name: 'Hamburguesa Clásica', price: '$10.00' },
    { image: 'images/product/h2.jpg', name: 'Hamburguesa de Pollo', price: '$12.00' },
    { image: 'images/product/h3.jpg', name: 'Hamburguesa de Queso', price: '$11.00' },
    { image: 'images/product/h4.jpg', name: 'Hamburguesa de Pescado', price: '$13.00' },
    { image: 'images/product/h5.jpg', name: 'Hamburguesa Doble', price: '$15.00' },
    { image: 'images/product/h6.jpg', name: 'Hamburguesa con Tocino', price: '$13.00' },
    { image: 'images/product/h7.jpg', name: 'Hamburguesa Vegetariana', price: '$11.00' },
];

function Product() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <section id="Product">
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-info" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Product;
