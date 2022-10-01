import React from 'react'

const img = "https://images.unsplash.com/photo-1587701712213-826b561028f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"

const AdBanner = () => {
    return (
        <div className='h-64 rounded-xl md:h-96 relative' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'top' }}>
            <div className='absolute right-4 bottom-4 flex flex-col gap-2 p-2 rounded-lg productDayInfo'>
                <span className='text-2xl font-semibold'>New Drop</span>
                <p>E' appena arrivata la nostra nuova collezione.</p>
                <button className='bg-black px-4 py-2 rounded-lg ml-auto'>Guarda</button>
            </div>
        </div>

    )
}

export default AdBanner