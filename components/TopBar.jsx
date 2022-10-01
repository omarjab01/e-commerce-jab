import React from 'react'
import ListaCategorie from './ListaCategorie'
import SearchInput from './SearchInput'

const TopBar = () => {
    return (
        <div className='grid grid-cols-1 grid-col-reverse gap-4 w-full'>
            {/* <ListaCategorie /> */}
            <SearchInput />
        </div>
    )
}

export default TopBar