import React from 'react'

const img = "https://images.unsplash.com/photo-1664440163809-25f00e4065ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"

const ItemCart = () => {
    return (
        <div className='flex flex-row gap-8'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <img src={img} className="w-32 h-32 object-cover rounded-lg" />
                <div className='flex flex-row items-center gap-4 w-full justify-between'>
                    <button className='bg-slate-200 text-slate-900 px-4 py-2 rounded-xl'>-</button>
                    <span className='text-xl'>4</span>
                    <button className='bg-slate-200 text-slate-900 px-4 py-2 rounded-xl'>+</button>
                </div>
            </div>
            <div className='flex flex-col h-full justify-between items-center'>
                <div>
                    <span className='text-xl font-medium'>Nome Articolo</span>
                    <p className='text-sm'>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </p>
                </div>
                <div className='ml-auto mt-8'>
                    <span className='text-xl font-medium'>€ 14,40</span>
                </div>
            </div>
        </div>
    )
}

export default ItemCart