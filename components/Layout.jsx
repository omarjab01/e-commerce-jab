import React from 'react'
import ListaCategorie from './ListaCategorie'
import Navbar from './NavbarComponents/Navbar'

const Layout = ({ children }) => {
    return (
        <div className='p-4 min-h-screen max-w-7xl mx-auto relative'>
            <Navbar />
            <div className='main h-full'>
                {children}
            </div>
        </div>
    )
}

export default Layout