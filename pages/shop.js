import React from 'react'
import AdBanner from '../components/AdBanner'
import FilteringSearch from '../components/FilteringSearch'
import ListaCategorie from '../components/ListaCategorie'
import ProductsList from '../components/ProductsList'
import TopBar from '../components/TopBar'

const Shop = () => {
    return (
        <div className='flex flex-col gap-2'>
            <AdBanner />
            <div className='mt-8'>
                <TopBar />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-12'>
                <div className='mb-8 md:mb-0'>
                    <FilteringSearch />
                </div>
                <div className='col-span-3'>
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}

export default Shop