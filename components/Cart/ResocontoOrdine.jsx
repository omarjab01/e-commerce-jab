import React from 'react'

const ResocontoOrdine = () => {
    return (
        <div className=''>
            <div className='bg-slate-50 p-2 px-4 rounded-t-xl text-slate-900'>
                <span>Riepilogo Ordine</span>
            </div>
            <div className='p-4 flex flex-col border-b border-b-slate-600 border-l border-l-slate-600 border-r border-r-slate-600 rounded-b-xl'>
                <p>Totale provvisorio (1 articolo):</p>
                <span className='text-2xl'> 22,09 €</span>
                <button className='mt-8 bg-slate-300 py-3 rounded-xl text-slate-900'>Complete Order</button>
            </div>
        </div>
    )
}

export default ResocontoOrdine