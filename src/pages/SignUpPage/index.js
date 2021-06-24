import React from 'react'
import Navbar from '../../components/Navbar'
import './SignUp.css'
import background from '../../images/hero.png'
import SignUpForm from '../../components/Forms/SignUpForm'
import FormTitle from '../../components/Forms/FormTitle'
import { RecordVoiceOverRounded } from '@material-ui/icons'

const SignUp = () => {
    return (
        <div className='signUpContainer'>
            <div className='signUpImageContainer'>
                <img src={background} alt="" />
            </div>

            <div className='signUpContent'>
                <Navbar className='signUpNavbar' />
                <div className='signUpWrapper'>
                    <FormTitle title='Sign Up' subtitle='Let your voice be heard' background='orange' icon={<RecordVoiceOverRounded fontSize="large" />} />
                    <SignUpForm />

                </div>
            </div>
            
            
        </div>
    )
}

export default SignUp
