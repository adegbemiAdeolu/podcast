import React from 'react'
import './Forms.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    const signUp = e => {
        e.preventDefault();

    }

    return (
        <div className='signInFormContainer'>
            <form className='formContainer' action='post'>
                <input type='text' placeholder='Enter your Username' />
                <input type='email' placeholder='Enter your email' />
                <input type='password' placeholder='Password' />
                <Button type='submit' text='Sign Up' backgroundColor='orange' textColor='white' onClick={signUp} />
                <p>Already have an account? <span><Link to='/sign-in' className='formLink' >Sign In here</Link></span></p>
            </form>
        </div>
    )
}

export default SignUpForm
