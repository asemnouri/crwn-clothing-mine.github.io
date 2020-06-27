import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.scss'
import {clearItemFromCart} from '../../redux/cart/cart.action'

const CheckoutItem=({cartItem,clearItemFromCart})=>{
    const {name,price,imageUrl,quantity} =cartItem

return(//we need to pass the whole item so that we can add items 
    <div className="checkout-item">
        <div className="image-container">
{/* a container for the img so that i can control it without affecting the othe propeties in the call */}
        <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'onClick={()=>clearItemFromCart(cartItem)}> &#10005;</div>
    </div>
)}

const mapDispatchToProps=(dispatch)=>({
    clearItemFromCart: (item)=>dispatch(clearItemFromCart(item))
  })
export default connect(null,mapDispatchToProps)(CheckoutItem)