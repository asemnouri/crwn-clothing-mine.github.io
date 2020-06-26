import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './crwm.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'

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
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
   currentUser,
   hidden
    })

export default connect(mapStateToProps)(Header)