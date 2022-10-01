import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        id: '',
        name: 'omar',
        email: 'email@email.com',
        profilePicture: '',
        itemsCarrello: [],
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        addToCart: (state, action) => {
            // state.itemsCarrello.push({ idItem: action.payload.id, name: action.payload.name, quantity: 1 });
            const item = {
                idItem: action.payload.id,
                name: action.payload.name,
                quantity: 1
            }
            return {
                ...state.itemsCarrello,
                itemsCarrello: [...state.itemsCarrello, item]
            }
        },
    }
})

export const { update, addToCart } = accountSlice.actions;


export default accountSlice.reducer;