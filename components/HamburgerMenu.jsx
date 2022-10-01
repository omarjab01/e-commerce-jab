import React from 'react'
import { IoIosClose } from 'react-icons/io'
import Link from 'next/link'

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {
    return (
        <div className='overlay lg:hidden z-10'>
            <div className='hamburgerMenu p-4 px-6 transition duration-800 ease-in-out flex flex-col gap-8'>
                <div className='flex justify-between items-center'>
                    <span className='text-2xl font-bold'>JabCommerce</span>
                    <IoIosClose fill="#fff" size={42} className="cursor-pointer" onClick={() => setOpenMenu(false)} />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-xl uppercase text-gray-300'>Home</li>
                        <li className='text-xl uppercase text-gray-300'>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className='text-xl uppercase text-gray-300'>Ordini</li>
                        <li className='text-xl uppercase text-gray-300'>Profilo</li>
                    </ul>
                    <button className='mr-auto hover:bg-red-500 px-6 py-3 rounded-lg bg-gray-700 transition duration-500 ease-in-out'>Esci</button>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu