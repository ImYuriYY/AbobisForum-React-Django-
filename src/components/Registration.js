import React from 'react'
import {useNavigate} from "react-router-dom";
import { useState} from 'react';
import axios from 'axios';


const Registration = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();




    
    const register = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/register/', {
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name,
            password: password
        })
        .then(response => 
            {
                console.log(response)
                if(response.statusText === 'OK') {
                    navigate('/login')
                }
            }
        ).catch(err =>
            setErrors(err)
        )
    }
    


    return (      
        <div className='reg-log-wrapper'>

            <form className='reg-log-form' onSubmit={register}>
                <p className='reg-log-title'>
                    Not registered yet? Let's fix this
                </p>
                <label className='reg-log-label'> 
                    <span className='input-title'>Nickname</span>
                    <input type='text' placeholder='Alevard' 
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                        
                    >

                    </input>
                    <span className='input-help-text'>
                        This nickname will be displayed in your profile
                    </span>
                </label>
                <label className='reg-log-label'> 
                    <span className='input-title'>Email</span>
                    <input type='email' placeholder='alevard_levski@gmail.com'
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    >

                    </input>
                    <span className='input-help-text'>
                        Notifications will be sent to this email address
                    </span>
                </label>
                <label className='reg-log-label'> 
                    <span className='input-title'>First name</span>
                    <input type='text' placeholder='Alevard'
                        onChange={event => setFirstName(event.target.value)}
                        value={first_name}
                    >

                    </input>
                    <span className='input-help-text'>
                        We need this to contact you
                    </span>
                </label>
                <label className='reg-log-label'> 
                    <span className='input-title'>Lastname</span>
                    <input type='text' placeholder='Levski'
                        onChange={event => setLastName(event.target.value)}
                        value={last_name}
                    >

                    </input>
                    <span className='input-help-text'>
                        We need this to contact you
                    </span>
                </label>
                <label className='reg-log-label'> 
                    <span className='input-title'>Password</span>
                    <input type='password' placeholder='Your password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    >

                    </input>
                    <span className='input-help-text'>
                        The password that will be used to log in to your account
                    </span>
                </label>

                <div className='reg-log-button-wrapper'>
                    <button className='reg-log-button'>
                        Register
                    </button>
                    <p>{errors && errors.error && errors.error.message}</p>
                </div>
            </form>
        </div>
    )
}


export default Registration
