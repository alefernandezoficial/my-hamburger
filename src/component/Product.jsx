import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Product.css';
import Cart from './Cart';

const products = [
    { id: 1, image: 'images/product/h1.jpg', name: 'goatBurger Clasica', price: '$950.00' },
    { id: 2, image: 'images/product/h2.jpg', name: 'Holandes Errante', price: '$1650.00' },
    { id: 3, image: 'images/product/h3.jpg', name: 'La triple marioneta', price: '$14.00' },
    { id: 4, image: 'images/product/h4.jpg', name: 'Hamburguesa de Pescado', price: '$13.00' },
    { id: 5, image: 'images/product/h5.jpg', name: 'Hamburguesa Doble', price: '$15.00' },
    { id: 6, image: 'images/product/h6.jpg', name: 'Hamburguesa con Tocino', price: '$13.00' },
    { id: 7, image: 'images/product/h7.jpg', name: 'Hamburguesa Vegetariana', price: '$11.00' },
];

function Product() {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((p) => p.id === product.id);

        if (existingProductIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const newProduct = { ...product, quantity: 1 };
            setCart([...cart, newProduct]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((p) => p.id !== productId);
        setCart(updatedCart);
    };

    const updateQuantity = (productId, newQuantity) => {
        const existingProductIndex = cart.findIndex((p) => p.id === productId);

        if (existingProductIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity = newQuantity;
            setCart(updatedCart);
        }
    };

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
                {products.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-info" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <button onClick={() => addToCart(product)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
            <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </section>
    );
}

export default Product;
