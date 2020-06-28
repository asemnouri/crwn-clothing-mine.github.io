import React from 'react'

import {connect} from 'react-redux'
import {selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collectionItem/collectionItem'

import './collection.scss'

 const CollectionPage=({collections})=>{
     console.log(collections)
     return(
    <div className="collection">
        <h2>G.Pddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h2>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),//very important see the shop selector
    });
export default connect(mapStateToProps)(CollectionPage)