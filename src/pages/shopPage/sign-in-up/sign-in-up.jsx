import React from 'react'
import './sign-in-up.scss'
import SignIn from '../../../components/signIn/signIn'
import SignUp from '../../../components/sign-up/sign-up'

const SignInUp =()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)
export default SignInUp