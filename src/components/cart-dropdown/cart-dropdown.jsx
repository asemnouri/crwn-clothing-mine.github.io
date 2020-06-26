import CustomButton from '../custom-Button/custom-Button';
import React from 'react'
import './cart-dropdown.scss'

const CartDropDown = () => (
    
    <div className='cart-dropdown'> 
        <div className='cart-items'>
           
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)


//you have access to dipatch in otherProps(when it is not passed as parameter),
// so you dont have to write it again and can be used in pther props
export default CartDropDown;
//the order of the HOC is very important because we need the info from connect to use withRouter after that 
//or use the ninja way of connect two HOC