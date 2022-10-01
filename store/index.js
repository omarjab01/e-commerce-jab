import { configureStore } from '@reduxjs/toolkit'
import accountSlice from "./userSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer: {
        account: accountSlice,
        search: searchSlice,
    },
});