import CustomButton from '../custom-Button/custom-Button';
import React from 'react'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropDown = ({cartItems,history,dispatch}) => (
    
    <div className='cart-dropdown'> 
        <div className='cart-items'>
         {cartItems.length?
          cartItems.map((cartItem)=>
         (<CartItem key={cartItem.id} item={cartItem}/>) )
        : <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>
            GO TO CHECK OUT
            </CustomButton>
    </div>
)

// const mapStateToProps=(state)=>({//make sure to destructure the cartItems
//     cartItems:selectCartItems(state)
//     })

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    });
//you can access Dispatch from the connect without writing it (can be founf in the props)


//you have access to dipatch in otherProps(when it is not passed as parameter),
// so you dont have to write it again and can be used in pther props
export default withRouter(connect(mapStateToProps)(CartDropDown));
//the order of the HOC(connect,withRouter) is very important because we need the info from connect to use withRouter after that 
//or use the ninja way of connect two HOC
//withRouter is used to access the history to go to the checkout page 