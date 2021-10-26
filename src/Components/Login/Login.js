import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useContext';
import pic from '../../hot-onion-restaurent-master/logo2.png'
const Login = () => {
    const { googleSign, signPass, setloading } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const handleLogin = () => {
        googleSign().then(result => {
            history.push(redirect_url)
        }).finally(() => setloading(false))
    }
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const hadlePassblur = e => {
        setpass(e.target.value)
    }
    const hadleEmailblur = e => {
        setemail(e.target.value)
    }
    const handleSign = (e) => {
        e.preventDefault();
        signPass(email, pass);
        history.push('/home')
    }
    return (
        <div className='reg text-center '>
            <img src={pic} alt="" className="img-fluid pt-5" height='300' width='300' />
            <form className=' pt-3' onSubmit={handleSign}>
                <input className='inputs my-4 w-25' onBlur={hadleEmailblur} type="email" placeholder='email' name="email" id="email" />
                <input className='inputs my-4 w-25' onBlur={hadlePassblur} type="password" placeholder='password' name="pass" id="pass" />
                <button className='inputs btn-danger mt-2 w-25' type="submit">Login</button>
            </form >
            <div className='text-center mt-3 mb-5 pb-5 '>
                <p>new user? <NavLink to='/signUp'>Click me</NavLink></p>
                <p>-------OR------</p>
                <button className='btn btn-success mb-5 ' onClick={handleLogin} >Google Sign In</button>
            </div>

        </div >
    );
};

export default Login;