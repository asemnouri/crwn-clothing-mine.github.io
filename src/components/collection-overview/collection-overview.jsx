import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../coolectionPreview/collectionPreview'


import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'


import './collection-overview'
//this will use nested routes
//routes that will take from Shop component to where you want (hats,jackets....)
//routes for now are just used in app.js

const CollectionOverview =({collection})=>(
    <div className="collection-overview">
        {collection.map(({id,...othercollectionProps})=>(
                <PreviewCollection key={id} {...othercollectionProps} />
              ))}  
    </div>

)

const mapStateToProps= createStructuredSelector({
    collection: selectCollectionsForPreview,
    });

export default connect(mapStateToProps)(CollectionOverview)