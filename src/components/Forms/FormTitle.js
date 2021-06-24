import React from 'react'

const FormTitle = ({ title, subtitle, background, icon }) => {
    return (
        <div className='formTitleContainer' style={{ backgroundColor: background}}>
            <img 
                className='videoFooterRecord' 
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
            <h2>
                <div className='formTitleIcon'>{icon}</div>
                {title}
            </h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default FormTitle
