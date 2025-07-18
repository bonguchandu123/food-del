import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate =useNavigate();
  return (
    <div className="cart">
      <div className="class-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
          <p>Subtotal</p>
          <p>{getTotalCartAmount()}</p>
        </div>
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>{getTotalCartAmount()===0?0:2}</p>
        </div>
        <div className="cart-total-details">
          <b>Total</b>
          <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
        </div>
        
      </div>
      <button onClick={() => navigate('/order')}>PROCCED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
        <div>
          <p>If You Have Promocode, Enter here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="prmo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
        </div>
        
      
  );
};

export default Cart;
