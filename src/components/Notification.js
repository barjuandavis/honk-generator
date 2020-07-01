import React from 'react'
import './styles/notification.css'

export default ({what, ...restProps}) => {
    let innerText = what === "text" ? "Texts copied!" : "Honks copied!" 
    return (
        <div {...restProps}>{innerText}</div>
    )
}