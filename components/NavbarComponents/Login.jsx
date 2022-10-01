import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'

const Login = ({ setOpenAuth }) => {
    const [showLogin, setShowLogin] = useState(true)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState(null)

    const handleRegistration = () => {
        console.log("register")
    }

    const handleLogin = () => {
        console.log("login")
    }


    return (
        <div className='authForm2'>
            <div className='flex flex-row justify-between'>
                <span className='text-xl font-medium'>
                    {
                        showLogin ? 'Log into your account' : 'Create Account'
                    }
                </span>
                <GrFormClose
                    onClick={() => setOpenAuth(false)}
                    className="cursor-pointer"
                />
            </div>
            <div className='my-8 flex flex-row gap-4'>
                <span onClick={() => setShowLogin(true)} className="cursor-pointer">Login</span>
                <span onClick={() => setShowLogin(false)} className="cursor-pointer">Register</span>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    !showLogin && (
                        <div className='flex flex-col'>
                            <span>
                                Name
                            </span>
                            <input type="text" placeholder='Enter your name' className='p-3 rounded-md' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    )
                }

                <div className='flex flex-col'>
                    <span>
                        Email
                    </span>
                    <input type="email" placeholder='Enter your email' className='p-3 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <span>
                        Password
                    </span>
                    <input type="password" placeholder='Enter your password' className='p-3 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {
                    !showLogin && (
                        <div className='flex flex-col'>
                            <span>
                                Confirm Password
                            </span>
                            <input type="password" placeholder='Confirm your password' className='p-3 rounded-md' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    )
                }
                {
                    error && (
                        <span>{error}</span>
                    )
                }

                <button className='bg-slate-400 py-3 text-lg font-medium rounded-md text-slate-900 mt-8'
                    onClick={showLogin ? handleLogin : handleRegistration}
                >
                    {
                        showLogin ? 'Login' : 'Create Account'
                    }
                </button>
            </div>
        </div>
    )
}

export default Login