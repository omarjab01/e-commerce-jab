import React from 'react'

const img = "https://images.unsplash.com/photo-1587701712213-826b561028f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"

const ProductDay = () => {
    return (
        <div className='productDay w-full relative rounded-xl'>
            <img src={img} className="w-full h-full object-cover rounded-xl" />
            <div className='relative productDayInfo flex flex-col gap-2'>
                <h3 className='titoloProdottoGiorno text-right lg:text-xl text-md font-semibold'>Giacca denim con bottone frontale senza maglietta</h3>
                <button className='bg-slate-200 inline-block px-4 py-2 rounded-lg text-slate-900 ml-auto float-right'>Compra</button>
            </div>
        </div>
    )
}

export default ProductDay