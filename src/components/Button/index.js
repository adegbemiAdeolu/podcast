import React from 'react'
import './Button.css'

const Button = ({ text, backgroundColor, textColor, onClick}) => {
    return (
        <>
            <button  onClick={onClick} style={{ backgroundColor: backgroundColor, color: textColor}} backgroundColor={backgroundColor}>
                {text}
            </button>
            
        </>
    )
}

export default Button
