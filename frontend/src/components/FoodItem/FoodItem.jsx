import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ({ id ,name, description, price, image}) => {

    
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div className='food-item' >
        <div className="food-item-img-container">
            <img src={url+"/images/"+image} alt="" className="food-item-img" />
            {!cartItems[id]
            ? <img onClick={() =>addToCart(id) } src={assets.add_icon_white} alt="" className="add" />:
                <div className="food-item-counter">
                    <img onClick ={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""  />
                    <p>{cartItems[id]}</p>
                    <img  onClick ={() => addToCart(id)} src={assets.add_icon_green} alt="" />

                </div>
            }
        </div>
        <div className="food-item info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />

            </div>
            <p className="food-item-description">
                {description}
            </p>

        </div>
        <p className="food-item-price">
            ${price}
        </p>
    
      
    </div>
  )
}

export default FoodItem
