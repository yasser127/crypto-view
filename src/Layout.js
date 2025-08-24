import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div
            style={{
                backgroundColor : '#1c2433ff',
                color : 'white',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Outlet />
        </div> 
    )
}

export default Layout