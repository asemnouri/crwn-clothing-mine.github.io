import React from 'react'
import CustonButton from '../custom-Button/custom-Button'
import {addItem} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'

import './collectionItem.scss'

const CollectionItem =({item,addItem})=>{
    const {name,price, imageUrl}=item
    return(
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='collection-footer'>
            <span className='name'>{ name}</span>
            <span className='price'>{ price}</span>
        </div>
        <CustonButton inverted onClick={()=>addItem(item)}>Add to Cart</CustonButton>
    </div>
)}

const mapDispatchToProps=(dispatch)=>({
    addItem: (item)=>dispatch(addItem(item))
  })

export default connect(null,mapDispatchToProps)(CollectionItem)