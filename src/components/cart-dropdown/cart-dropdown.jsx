import CustomButton from '../custom-Button/custom-Button';
import React from 'react'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'

const CartDropDown = ({cartItems}) => (
    
    <div className='cart-dropdown'> 
        <div className='cart-items'>
         { cartItems.map((cartItem)=>(<CartItem key={cartItem.id} item={cartItem}/>) )}
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps=({cart:{cartItems}})=>({//make sure to destructure the cartItems
    cartItems
    })

//you have access to dipatch in otherProps(when it is not passed as parameter),
// so you dont have to write it again and can be used in pther props
export default connect(mapStateToProps)(CartDropDown);
//the order of the HOC is very important because we need the info from connect to use withRouter after that 
//or use the ninja way of connect two HOC