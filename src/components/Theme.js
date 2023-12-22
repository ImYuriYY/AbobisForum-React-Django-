import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'






const Theme = () => {
    const {id} = useParams()
    const [thisTheme, setThisTheme] = useState(null)
    const [thisMessages, setThisMessages] = useState(null)
    const [thisUsers, setThisUsers] = useState(null)

    

    useEffect(() => {
        axios.get('http://localhost:8000/api/themeslist')
        .then(response => {
            response.data.filter(element => {if (element.id === Number(id)) {
                setThisTheme(element)
            }})

        })
        .catch(err => {
            console.log(err)
        })

        axios.get('http://localhost:8000/api/messageslist')
        .then(response => {
            setThisMessages([response.data.filter(element => element.theme === Number(id))])
        
        })
        .catch(err => {
            console.log(err)
        })
        

        axios.get('http://localhost:8000/api/userslist')
        .then(response => {
            setThisUsers([response.data])
        })
        .catch(err => {
            console.log(err)
        })
        
    }, [id])

    

    return (      
        <section className='page-theme-wrapper'>
            
            {thisTheme && (
                <>
                    <div className='page-theme-title'>
                        <p className='page-theme-name'>{thisTheme.title}</p>
                        <div className='page-theme-create-info'>
                            <p>Created: {thisTheme.create_date}</p>
                            {thisUsers && (
                                <>
                                    {thisUsers[0].map((user, key) => {if (user.id === thisTheme.theme_owner) {
                                        return(
                                            <p key={key}>By 
                                                <Link className='theme-owner-link' 
                                                    to={'/profile/' + (String(user.id))}
                                                    >
                                                    {user.username}
                                                </Link>
                                            </p>
                                        )
                                    }
                                    })}
                                </>
                            )}
                        </div>
                        
                    </div>
                    
                    <ul className='page-theme-messages-wrapper'>
                        
                        {thisMessages && (
                            <>
                                {thisMessages[0].map((message, key) => {
                                    return (
                                        <div key={key} className='theme-message'>
                                            
                                            {thisUsers && (
                                                <>
                                                    {thisUsers[0].map((user, key) => { if (user.id === message.sender) {{
                                                        return(
                                                            <div key={key} className='message-sender-info'>
                                                                <Link className='message-owner-link' 
                                                                    to={'/profile/' + String(user.id)}
                                                                    >
                                                                    {user.username}
                                                                </Link>
                                                                
                                                                <p>{user.first_name} {user.last_name}</p>
                                                                <p>Joined: {user.date_joined.slice(0,10)}</p>
                                                            </div>
                                                            
                                                        )
                                                    }}
                                                    })
                                                    }
                                                    

                                                </>
                                            )}
                                            <p className='message-text'>
                                                {message.text}
                                            </p>
                                            <p className='message-send-data'>
                                                Sended: <br />{message.send_date}
                                            </p>
                                            
                                        </div>
                                    )
                                }
                                )}
                            </>
                        )}
                    </ul>
                </>
            )}
        
        </section>
    )
   
}


export default Theme

























// class Theme extends React.Component{
//     componentDidMount() {
//         const { id } = this.props.match.params;
//     }


//     constructor(props) {
//         super(props)

//         this.state = {
//             thisTheme: {
//                 title: ''
//             }
//         }

        

//         axios.get('http://localhost:8000/api/themeslist')
//         .then(response => {
//             this.setState(
//                 {
//                     thisTheme: response.data[this.props.id - 1]
//                 }
//             )
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }


//     render () {
//         return (      
//             <section className='page-theme-wrapper'>
            
//                 <div className='page-theme-title'>{this.state.thisTheme.title}</div>
//                 <div></div>
            
//             </section>
//         )
//     }
   
// }


// export default Theme