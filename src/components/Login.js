import React from 'react'
import {useNavigate} from "react-router-dom";
import { useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();




    
    const login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/login/', {
            username: username,
            password: password
        })
        .then(response => 
            {
                if(response.statusText === 'OK') {
                    Cookies.set('jwt', response.data.jwt)
                    navigate('/')
                }
            }
        ).catch(err =>
            setErrors(err)
        )
    }
    
    return (      
        <div className='reg-log-wrapper'>
            <form className='reg-log-form' onSubmit={login}>
                <p className='reg-log-title'>
                    Already registered? Log in to your account
                </p>
                <label className='reg-log-label'> 
                    <span className='input-title'>Nickname</span>
                    <input type='text' placeholder='Alevard'
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                </label>
                <label className='reg-log-label'> 
                    <span className='input-title'>Password</span>
                    <input type='password' placeholder='Your password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </label>
                <div className='reg-log-button-wrapper'>
                    <button className='reg-log-button'>
                        Login
                    </button>
                    <p>{errors && errors.error && errors.error.message}</p>
                </div>
            </form>
        </div>
    )
}


export default Login
