import '../../styles/pages/Cart.css';
import React from 'react';

function Cart({ cart, setCart, removeFromCart, updateQuantity }) {
    const handleRemoveClick = (productId) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId, e) => {
        const newQuantity = e.target.value;
        updateQuantity(productId, newQuantity);
    };

    return (
        <div className="cart" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <h2>Carrito</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <span>
                            <input type="number" min="1" value={product.quantity} onChange={(e) => handleQuantityChange(product.id, e)} />
                        </span>
                        <span>{parseFloat(product.price).toFixed(2) * product.quantity}</span>
                        <button onClick={() => handleRemoveClick(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <span>Total:</span>
                <span>{cart.reduce((acc, product) => acc + parseFloat(product.price).toFixed(2) * product.quantity, 0)}</span>
            </div>
            <button onClick={() => setCart([])}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;