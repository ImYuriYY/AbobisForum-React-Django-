import React from 'react'
import {Link, Outlet } from 'react-router-dom'

class HeaderFooter extends React.Component {
    render() {
        return (
            <>
            
                <div className='hat-image'>
                    <div className='hat-blind'>
                        <Link className='hat-text' to='/'>Abobis</Link>
                    </div>
                </div>
                        
                <header>
                    <ul className='autorize-wrapper'>
                        <li className='autorize-link'>
                            <div className='login-image-icon'></div>
                            <Link to='/login'>
                                Login
                            </Link>
                        </li>
                        <li className='autorize-link'>
                            <div className='registration-image-icon'></div>
                            <Link to='/registration'>
                                Registration
                            </Link>
                        </li>
                    </ul>

                </header>


                <Outlet />
        

                <footer>
                    <p>	&copy; Badilies 2023 </p>
                </footer>
            </>
        )
    }



}

export default HeaderFooter