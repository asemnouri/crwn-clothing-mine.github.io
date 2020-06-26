import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import {selectCartItemCount} from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon =({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' >
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

//this reduce way makes us always call the cartitems and rerender, 
//the reselect way makes you render only one time
//here we dont need to change the state so we use the reselect method
// const mapStateToProps=({cart:{cartItems}})=>({//make sure to destructure the cartItems
//     itemCount:cartItems.reduce((acc,cartitem)=>cartitem.quantity+acc,0)
//     })

const mapStateToProps=(state)=>({//make sure to destructure the cartItems
    itemCount:selectCartItemCount(state)
    })

const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
  })
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)