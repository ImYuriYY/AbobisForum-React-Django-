import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const UserProfile = () => {

    const {id} = useParams()
    const [thisUser, setThisUser] = useState(null)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/userslist')
        .then(response => {
            setThisUser(response.data[id - 1])
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])
    return (      
        <div className='user-profile-wrapper'>
            {thisUser && (
                <>
                    <div className='user-block'>
                        <p className='user-title'>User</p>
                        <div className='user-info'>
                            <div className='user-names-wrapper'>
                                <p className='user-name'>Nickname: {thisUser.username}</p>
                                <p className='user-name'>{thisUser.first_name} {thisUser.last_name}</p>
                            </div>
                            <div className='stat-wrapper'>
                                <div className='info-block'>
                                    <p>Joined us</p>
                                    <p>{thisUser.date_joined.slice(0, 10)}</p>
                                </div>
                                <div className='info-block'>
                                    <p>Themes created</p>
                                    <p>{thisUser.themes_count}</p>
                                </div>
                                <div className='info-block'>
                                    <p>Messages sended</p>
                                    <p>{thisUser.messages_count}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </>
            )}
            
        </div>
    )
}


export default UserProfile