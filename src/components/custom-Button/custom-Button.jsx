import React from 'react'
import './custom-Button.scss'

const CustomButton=({children,isGoogleSignIn,inverted, ...otherProps})=>(
    <button className={`${isGoogleSignIn ? 'googlesignin':''}${inverted ? 'inverted' : ''} custom-button `} {...otherProps}>
        {children}
    </button>
)
export default CustomButton