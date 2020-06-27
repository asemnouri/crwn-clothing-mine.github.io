import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.scss'
import {clearItemFromCart,addItem,removeItem} from '../../redux/cart/cart.action'

const CheckoutItem=({cartItem,clearItemFromCart,removeItem,addItem})=>{
    const {name,price,imageUrl,quantity} =cartItem

return(//we need to pass the whole item so that we can add items 
    <div className="checkout-item">
        <div className="image-container">
{/* a container for the img so that i can control it without affecting the othe propeties in the call */}
        <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
        <span className='price'>{price}</span>
        <div className='remove-button'onClick={()=>clearItemFromCart(cartItem)}> &#10005;</div>
    </div>
)}

const mapDispatchToProps=(dispatch)=>({
    clearItemFromCart: (item)=>dispatch(clearItemFromCart(item)),
    addItem: (item)=>dispatch(addItem(item)),
    removeItem: (item)=>dispatch(removeItem(item))
    

  })
export default connect(null,mapDispatchToProps)(CheckoutItem)