import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class RightMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [

            ]
        }


        axios.get('http://localhost:8000/api/userslist')
        .then(response => {
            this.setState(
                {
                    users: response.data
                }
            )
        })
        .catch(err => {
            console.log(err)
        })
    }




    render() {
        return (
            <section className='right-menu'>
                <div className='menu-block'>
                    <p className='menu-title'>Last messages</p>
                    <ul className='right-menu-list'>
                        <li className='last-message'>
                            
                        </li>
                    </ul>
                </div>
                <div className='menu-block'>
                    <p className='menu-title'>Users</p>
                    <ul className='right-menu-list'>
                        {this.state.users.map((user, key) => {
                            return (
                                <li key={key} className='right-menu-user'>
                                    <Link className='right-menu-userslist-link' to={'profile/' + String(user.id)}>
                                        {user.username}
                                    </Link>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
                
            </section>
        )
    }



}

export default RightMenu