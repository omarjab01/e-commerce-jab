import React from 'react'

const DropDownMenuProfile = () => {
    return (
        <div className='dropdownMenuProfile'>
            <div className='flex flex-col gap-2 mb-4'>
                <div>
                    <img />
                    <span>Omar Jabraoui</span>
                </div>
                <span>Ordini</span>
            </div>
            <div className='border-t-slate-600 border-t pt-4'>
                <button className='text-red-400 hover:text-red-600'>Esci</button>
            </div>
        </div>
    )
}

export default DropDownMenuProfile