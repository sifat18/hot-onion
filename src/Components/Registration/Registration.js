import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Context/useContext';
import pic from '../../hot-onion-restaurent-master/logo2.png'

import './Registration.css'
const Registration = () => {

    const { creatUser } = useAuth();
    const history = useHistory();
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const hadlePassblur = e => {
        console.log(e.target.value);
        setpass(e.target.value)
    }
    const hadleEmailblur = e => {
        console.log(e.target.value);
        setemail(e.target.value)
    }
    const handleUser = (e) => {
        e.preventDefault();
        creatUser(email, pass);
        history.push('/home')
    }

    return (
        <div className='reg text-center pt-4'>
            <img src={pic} alt="" className="img-fluid pt-5" height='300' width='300' />
            <form className='mt-3 pt-2' onSubmit={handleUser}>
                <input className='inputs my-4 w-25' type="email" onBlur={hadleEmailblur} placeholder='email' name="email" id="email" />
                <input className='inputs my-4 w-25' type="password" onBlur={hadlePassblur} placeholder='password' name="pass" id="pass" />
                <button className='inputs btn-danger w-25 mt-2 mb-5'>Register</button>
            </form>
        </div >
    );
};

export default Registration;