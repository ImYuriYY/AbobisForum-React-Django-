import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import HeaderFooter from './components/HeaderFooter'
import UserProfile from './components/UserProfile'
import Theme from './components/Theme'



class App extends React.Component {

    render() {
        return (
            <> 
                <Routes>
                    <Route path='/' element={<HeaderFooter />}>
                        <Route index element={<Home />} />
                        <Route path='registration' element={<Registration />} />
                        <Route path='login' element={<Login />} />
                        <Route path='profile/:id' element={<UserProfile />} />
                        <Route path='theme/:id' element={<Theme />} />
                    </Route>
                </Routes>    
            </>
        )
    }


}

export default App