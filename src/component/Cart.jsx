import React from 'react';
import '../styles/Cart.css';

function Cart({ cart, setCart, removeFromCart, updateQuantity }) {
    const handleQuantityChange = (event, productId) => {
        const newQuantity = parseInt(event.target.value);
        updateQuantity(productId, newQuantity);
    };
    const getTotalPrice = () => {
        return cart.reduce((total, product) => {
            return total + (parseFloat(product.price.slice(1)) * product.quantity);
        }, 0).toFixed(2);
    };
    return (
        <div className="cart-container" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <div className="cart-header">
                <h2>Carrito de compras</h2>
                <button className="clear-cart" onClick={() => setCart([])}>Vaciar carrito</button>
            </div>
            <ul className="cart-list">
                {cart.map((product) => (
                    <li key={product.id}>
                        <img className="cart-item-image" src={product.image} alt={product.name} />
                        <div className="cart-item-info">
                            <h3>{product.name}</h3>
                            <p className="cart-item-price">{product.price}</p>
                            <div className="cart-item-quantity">
                                <label htmlFor={`quantity-${product.id}`}>Cantidad:</label>
                                <input
                                    type="number"
                                    id={`quantity-${product.id}`}
                                    value={product.quantity}
                                    min="1"
                                    onChange={(event) => handleQuantityChange(event, product.id)}
                                />
                            </div>
                            <button className="remove-item" onClick={() => removeFromCart(product.id)}>Quitar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <span style={{ fontFamily: 'Oswald, sans-serif' }}>Total:</span>
                <span className="cart-total-price" style={{ fontFamily: 'Oswald, sans-serif' }}>${getTotalPrice()}</span>
            </div>
        </div>
    );
}

export default Cart;