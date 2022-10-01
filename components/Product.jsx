import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/userSlice'

const url = "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"

const Product = () => {

    const storeItems = useSelector(state => state.account.itemsCarrello)

    const dispatch = useDispatch()

    console.log(storeItems)

    const addToCartHandler = () => {
        dispatch(addToCart({ id: 23543, name: 'macbook' }))
    }

    return (
        <div className='w-full product-card relative'>
            <div>
                <img src={url} className="rounded-lg productImageCard object-cover w-full" />
            </div>
            <div className='card-body rounded-b-lg'>
                <div className='flex flex-row justify-between'>
                    <span>Macbook Air M1</span>
                    <span className='text-xl self-baseline'>€ 16,23</span>
                </div>
                <div>
                    <div className='flex flex-row gap-1'>
                        <AiFillStar fill='yellow' />
                        <AiFillStar fill='yellow' />
                        <AiFillStar fill='yellow' />
                        <AiFillStar fill='yellow' />
                        <AiFillStar fill='yellow' />
                        <AiFillStar fill='yellow' />
                    </div>
                    <button className='float-right mt-6 hover:text-slate-300 transition duration-300 ease-out' onClick={addToCartHandler}>Aggiungi al Carrello</button>
                </div>
            </div>
        </div>
    )
}

export default Product