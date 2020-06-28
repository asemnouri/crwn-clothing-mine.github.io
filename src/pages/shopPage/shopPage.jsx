import React from 'react'
import './shopPage.scss'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection'


import CollectionOverview from '../../components/collection-overview/collection-overview'

const ShopPage =({match})=>{//we have access to match because shopePage is nested in a route in app.js
          return(
            <div className='shop-page'>
             <Route exact path={`${match.path}`} component={CollectionOverview}/>
             <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
             
             {/* path={`${match.path}/:catagoryId`} you can hardcode match.path by shop (this is nested  routes) */}
             {/* match.path returns you the '/shop' */}
            </div>
        )
    }



export default ShopPage