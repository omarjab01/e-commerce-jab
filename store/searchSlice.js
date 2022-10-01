import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        inputText: '',
        color: '',
        minPrice: 0,
        maxPrice: 999,
        size: [
            "sm", "md", "lg"
        ]
    },
    reducers: {
        searchInput: (state, action) => {
            state.inputText = action.payload.inputText;
        }
    }
})

export const { searchInput } = searchSlice.actions;


export default searchSlice.reducer;