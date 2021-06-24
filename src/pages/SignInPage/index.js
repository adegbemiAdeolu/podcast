import React from 'react'
import Navbar from '../../components/Navbar'
import './SignIn.css'
import background from '../../images/hero.png'
import SignInForm from '../../components/Forms/SignInForm'
import FormTitle from '../../components/Forms/FormTitle'
import { PersonRounded } from '@material-ui/icons'

const SignIn = () => {
    return (
        <div className='signInContainer'>
            <div className='signInImageContainer'>
                <img src={background} alt="" />
            </div>

            <div className='signInContent'>
                <Navbar className='signInNavbar' />
                <div className='signInWrapper'>
                    <FormTitle title='Sign In' subtitle='Let your voice be heard' background='teal' icon={<PersonRounded fontSize="large"  />} />
                    <SignInForm />

                </div>
            </div>
            
            
        </div>
    )
}

export default SignIn
