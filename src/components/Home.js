import React from 'react'
// import axios from 'axios'

import RightMenu from './RightMenu';
import Links from './Links';
import UsersThemes from './UsersThemes';


// const baseURL = 'http://localhost:8000/api/v1/themeslist'
class Home extends React.Component {

 

    render() {
        return (
            <> 
                <section className='main'>

                    <div className='main-centering'>
                        <div className='themes'>
                            <Links />
                            <UsersThemes />
                        </div>
                        <RightMenu />
                    </div>
                </section>
            </>
        )
    }


}

export default Home