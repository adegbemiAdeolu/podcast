import React from 'react'
import './Hero.css'
import Button from '../Button'
import background from '../../images/hero.png'

const Hero = () => {
    return (
        <div className='heroContainer'>
            <div className='heroWrapper'>
            
                <div className='heroImageContainer'>
                    <img src={background} alt="" />
                </div> 
                <h1>Godcast Podcast</h1>

                <h3>Forged in the secret place</h3>
                
                <Button 
                    text= "Get Started"
                    textColor= "#000"
                    backgroundColor= "#4ef"
                    onClick=""  />
            </div>
            
        </div>
    )
}

export default Hero
