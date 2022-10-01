import React from 'react'
import Categoria from './Categoria'
import { MdOutlineKeyboardArrowRight as RightIcon } from 'react-icons/md'
import { MdOutlineKeyboardArrowLeft as LeftIcon } from 'react-icons/md'



const ListaCategorie = () => {

    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div className='flex flex-row justify-between items-center relative'>
            <LeftIcon onClick={slideLeft} size={64} className="cursor-pointer hidden lg:block" />
            <ul className='flex flex-row gap-4 overflow-auto scrool-smooth overflow-x-scroll whitespace-nowrap scroll scroll-smooth scrollbar-hide py-0' id="slider">
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
            </ul>
            <RightIcon size={64} onClick={slideRight} className="cursor-pointer hidden lg:block" />
        </div>
    )
}

export default ListaCategorie