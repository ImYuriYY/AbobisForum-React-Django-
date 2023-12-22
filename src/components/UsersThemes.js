import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersThemes extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            themes: [

            ],
            users: [

            ]
        }

        

        axios.get('http://localhost:8000/api/themeslist')
        .then(response => {
            this.setState(
                {
                    themes: response.data
                }
            )
        })
        .catch(err => {
            console.log(err)
        })



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
            <div className='global-theme'>
                <Link className='add-theme-button'></Link>
                <p className='global-theme-title'>Users Themes</p>
                <ul className='global-theme-list'>
                    {this.state.themes.map((theme, key) => {
                        return (
                            <li className='theme' key={key}>
                                <div className='theme-links-wrapper'>
                                    <Link className='theme-link' to={'theme/' + String(theme.id)}>
                                        {theme.title}
                                    </Link>
                                </div>
                                {this.state.users.map((user, key) => {
                                    return (
                                        <div key={key} className='theme-links-wrapper'>
                                            <Link className='theme-owner' to={'profile/' + String(theme.theme_owner)}>
                                                {user.id === theme.theme_owner ? user.username : null }
                                            </Link>
                                        </div>
                                    )
                                })}
                                
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }



}

export default UsersThemes