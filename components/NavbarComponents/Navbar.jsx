import React, { useState } from 'react'
import HamburgerMenu from '../HamburgerMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdNotifications } from 'react-icons/md'
import { ImCart } from 'react-icons/im'
import Link from 'next/link'
import DropDownMenuProfile from '../DropDownMenuProfile'
import { HiUserCircle } from 'react-icons/hi'
import Carrello from '../Carrello'
import Login from './Login'

const styleIcon = "hover:fill-white transition duration-300 ease-in-out"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)


    return (
        <>
            <div className='flex flex-row justify-between mb-8 rounded-2xl items-center static'>
                <div className='flex flex-row items-center'>
                    <Link href="/">
                        <span className="text-xl font-bold hidden lg:block cursor-pointer">JabCommerce</span>
                    </Link>
                    <GiHamburgerMenu size={24} className="lg:hidden cursor-pointer" onClick={() => setOpenMenu(true)} />
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex flex-row gap-2'>
                        <li>
                            <Link href="/shop">Store</Link>
                        </li>
                        <li>
                            <Link href="/shop">News</Link>
                        </li>
                        <li>
                            <Link href="/shop">Latest Drop</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <MdNotifications size={32} fill="#ADADAD" className={styleIcon} />
                    <Link href="/cart">
                        <div className="relative">
                            <ImCart size={32} fill="#ADADAD" className={styleIcon} />
                            <span className="absolute top-5 right-[-.3rem] bg-blue-400 text-xs px-2 py-1 rounded-full">7</span>
                        </div>
                    </Link>
                    <Link href='/auth'>
                        <div className='flex flex-row items-center gap-2 ml-8'>
                            <HiUserCircle size={24} />
                            <button>Login</button>
                        </div>
                    </Link>
                    <div className='hidden'>
                        <img src="https://images.unsplash.com/photo-1664268531721-b3a29768467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className='cursor-pointer w-11 h-11 rounded-full object-cover' onClick={() => setOpenDropdown((prev) => !prev)} />
                    </div>
                </div>
            </div>
            {
                openMenu && <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            }
            {
                openDropdown && <DropDownMenuProfile />
            }
            {/* <Carrello /> */}
            {
                openAuth && <Login
                    setOpenAuth={setOpenAuth}
                />
            }
        </>
    )
}

export default Navbar