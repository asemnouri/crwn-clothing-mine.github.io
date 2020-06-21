import React from 'react'
import './collectionPreview.scss'
import CollectionItem from '../collectionItem/collectionItem'

const PreviewCollection =({items, title})=> (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx)=>(idx<4)).map(({id, ...otherItems})=>(
                    <CollectionItem key={id} {...otherItems}/>
                    
                ))
            }
        </div>
    </div>
)  
    
       
    

export default PreviewCollection