import React from 'react'
import Login from '../components/NavbarComponents/Login'

const img = "https://images.unsplash.com/photo-1664465919513-ead0b9ca4b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"

const auth = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='loginPage grid grid-col-1 md:grid-cols-2'>
                <img src={img} />
                <Login />
            </div>
        </div>
    )
}

export default auth