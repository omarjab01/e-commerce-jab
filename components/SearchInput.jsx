import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import searchSlice, { searchInput, updateSearch } from '../store/searchSlice'

const imgUrl = "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

const SearchInput = () => {
    const storeName = useSelector(state => state.search.inputText)
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('')

    const handleSearch = () => {
        dispatch(searchInput({ inputText }))
        setInputText('')
    }
    return (
        <div className='w-full flex flex-row items-center my-4 gap-4 md:w-1/2 lg:1/3 md:ml-auto border-b border-b-slate-700'>
            <input type="search" placeholder="Search Here" className='p-4 w-full outline-none  inputSearchField'
                value={inputText} onChange={(event) => setInputText(event.target.value)}
            />
            <AiOutlineSearch size={24} className="mr-4 cursor-pointer" onClick={handleSearch} />
        </div>
    )
}

export default SearchInput