import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const FilteringSearch = () => {
    const [shopMoreFilterMobile, setShopMoreFilterMobile] = useState(false)
    // let currentWidth = document.documentElement.clientWidth


    return (
        <div className='w-full filterResearch '>
            <div className='rounded-t-xl p-4 topFilter flex flex-row justify-between items-center w-full'>
                <span>Filter your research</span>
                <IoMdArrowDropdown size={32} className="cursor-pointer" onClick={() => setShopMoreFilterMobile((prev) => !prev)} />
            </div>

            { // Options horizontal scroll 
            }
            {
                shopMoreFilterMobile && (
                    <div className='bottomFilter flex flex-row gap-12 p-4 overflow-auto md:flex-col transition duration-500 ease-out'>
                        <div className='borderBottomFilter'>
                            <div className='mb-6'>
                                <span className='text-xl'>Color</span>
                            </div>
                            <div className='flex flex-row gap-6'>
                                <button className='w-6 h-6 rounded-full bg-red-600' />
                                <button className='w-6 h-6 rounded-full bg-black' />
                                <button className='w-6 h-6 rounded-full bg-white' />
                            </div>
                        </div>
                        <div className='borderBottomFilter'>
                            <div className='mb-3'>
                                <span className='text-xl'>Size</span>
                            </div>
                            <div className='flex flex-row gap-6 md:flex-wrap'>
                                <button className='px-4 py-2 border border-slate-500 rounded-xl'>Small</button>
                                <button className='px-4 py-2 border border-slate-500 rounded-xl'>Medium</button>
                                <button className='px-4 py-2 border border-slate-500 rounded-xl'>Large</button>
                            </div>
                        </div>
                        <div className='borderBottomFilter'>
                            <div className='mb-3'>
                                <span className='text-xl'>Price Range</span>
                            </div>
                            <div className='flex flex-row gap-6 items-center'>
                                <input type="number" className='w-12 h-12 bg-none bg-transparent border border-slate-400 rounded-lg' />
                                <span>-</span>
                                <input type="number" className='w-12 h-12 bg-none bg-transparent border border-slate-400 rounded-lg' />
                            </div>
                        </div>
                        <button className='w-full py-3 bg-slate-300 text-slate-900 rounded-md'>Apply Filters</button>
                    </div>
                )
            }

        </div>
    )
}

export default FilteringSearch