import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import './style.css';

const Cart = () => {
  const { cartItems, removeItem, incItem, decItem, total, specificItem } = useGlobalContext();
  return (
    <div>
      <h3>Cart Items</h3>
      {cartItems.length === 0 && <div>Cart is Empty</div>}
      {
        cartItems.map(item => {
          return (
            <div key={item.id} className="cart-items">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-left">
                <h3 className="cart-name">
                  <Link to={`/${item.subname}`} onClick={() => specificItem(item.id)}>{item.name}</Link>
                </h3>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
              <div className="cart-center">
                <button className="decreace-btn" onClick={() => decItem(item.id)}>-</button>
                <button className="increase-btn" onClick={() => incItem(item.id)}>+</button>
              </div>
              <div className="cart-right">
                <span>{item.quantity}</span>
                <span>x</span>
                <span>{item.price.toFixed(3)} d</span>
              </div>
            </div>
          )
        })
      }
      <hr />
      <div className="total">
        <h3>Total:</h3>
        <h3>{total.toFixed(3)} d</h3>
      </div>
    </div>
  );
};

export default Cart;