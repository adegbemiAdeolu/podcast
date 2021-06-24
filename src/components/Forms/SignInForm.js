import React from 'react'
import './Forms.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

const SignInForm = () => {
    const signIn = e => {
        e.preventDefault();

    }

    return (
        <div className='signInFormContainer'>
            <form className='formContainer' action='post'>
                <input type='email' placeholder='Enter your email' />
                <input type='password' placeholder='Password' />
                <Button type='submit' text='Sign In' backgroundColor='teal' textColor='white' onClick={signIn} />
                <p>Don't have an account? <span><Link to='/sign-up' className='formLink' >Sign Up here</Link></span></p>
            </form>
        </div>
    )
}

export default SignInForm
