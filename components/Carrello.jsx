import React from 'react'

const img = "https://images.unsplash.com/photo-1664207251296-569bacae6f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

const Carrello = () => {
    return (
        <div>
            <span>Carrello</span>
            <div>
                <div>
                    <img src={img} className="w-12 h-12 rounded-sm" />
                    <span>
                        2
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Carrello