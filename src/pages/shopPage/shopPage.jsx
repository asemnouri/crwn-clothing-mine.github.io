import React from 'react'
import './shopPage.scss'
import PreviewCollection from '../../components/coolectionPreview/collectionPreview' 
import {connect } from 'react-redux'
import {selectShopCollections} from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect';

const ShopPage =({collection})=>{
  
        return(
            <div className='shop-page'>
              {collection.map(({id,...othercollectionProps})=>(
                <PreviewCollection key={id} {...othercollectionProps} />
              ))}  
            </div>
        )
    }

const mapStateToProps= createStructuredSelector({
    collection: selectShopCollections,
    });

export default connect(mapStateToProps)(ShopPage)