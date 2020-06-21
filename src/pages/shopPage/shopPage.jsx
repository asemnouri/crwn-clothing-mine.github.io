import React from 'react'
import SHOP_DATA from './ShopData.js'
import './shopPage.scss'
import PreviewCollection from '../../components/coolectionPreview/collectionPreview' 

class ShopPage  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            collection : SHOP_DATA
        }
    }
    render(){
        const {collection}=this.state
        return(
            <div className='shop-page'>
              {collection.map(({id,...othercollectionProps})=>(
                <PreviewCollection key={id} {...othercollectionProps} />
              ))}  
            </div>
        )
    }
}
export default ShopPage