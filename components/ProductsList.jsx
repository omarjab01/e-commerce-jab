import React from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'

const listProducts = [1, 2, 3, 4, 5, 6]

const ProductsList = () => {
    const searchInput = useSelector(state => state.search.inputText)

    return (
        <>
            <p>{searchInput}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    listProducts.map((product) => (
                        <Product />
                    ))
                }
            </div>
        </>
    )
}

export default ProductsList