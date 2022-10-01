import React from 'react'
import ItemCart from '../components/Cart/ItemCart'
import ResocontoOrdine from '../components/Cart/ResocontoOrdine'
import { MdDelete } from 'react-icons/md'

const cart = () => {
    return (
        <div>
            <div className='mb-8 flex flex-row justify-between items-center'>
                <span className='text-xl'>Cart</span>
                <MdDelete size={24} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='md:col-span-3 order-2 md:order-1 flex flex-col gap-8'>
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                </div>
                <div className='order-1 md:order-2'>
                    <ResocontoOrdine />
                </div>
            </div>
        </div>
    )
}

export default cart