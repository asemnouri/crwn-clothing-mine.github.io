import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './crwm.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';


const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'><Logo/></Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            { currentUser 
             ?
                <div className='option' onClick={()=> auth.signOut()}> SIGNOUT</div>
             :  
            <Link className='option' to='/signin'>SIGNIN</Link>}
            <CartIcon/>
        </div>
        {
            hidden?null:<CartDropDown/>
        }
        
    </div>
)

// const mapStateToProps=(state)=>({
// currentUser:state.user.currentUser
// })

//another way of destrucuring
//we pass the state because every thing is done in the reselect
// const mapStateToProps=(state)=>({
//    currentUser:selectCurrentUser(state),
//    hidden:selectCartHidden(state)
//     })

//OR using structured selector
//we pass an object
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
 

export default connect(mapStateToProps)(Header)