import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/pages/Product.css';
import Cart from '../pages/Cart';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yqenaqabjnzqqniiqnxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxZW5hcWFiam56cXFuaWlxbnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NzQ2ODAsImV4cCI6MTk5MzQ1MDY4MH0.l4iLyHwPfjvusfLtUz3qyKsmIp2iNOpTAVaVRpj6Qv0';
const supabase = createClient(supabaseUrl, supabaseKey);



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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            let { data: products, error } = await supabase.from('products').select('*');
            if (error) console.log('Error fetching products:', error.message);
            else setProducts(products);
        }
        fetchProducts();
    }, []);

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
                        <img src={product.image_url} alt={product.name} />
                        <div className="product-info" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            <h2>{product.name}</h2>
                            <p>{parseFloat(product.price).toFixed(2)}</p>
                            <p>{product.description}</p>
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