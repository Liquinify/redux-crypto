import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICrypto } from "../../models/ICrypto";

const initialState = {
    favourites: []
}

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<ICrypto>) => {
            state.favourites.push(action.payload)
        },
        removeFavourite: (state, action: PayloadAction<ICrypto>) => {
            state.favourites = state.favourites.filter((f: ICrypto) => f.id !== action.payload.id)
        },
        resetFavourite: (state) => {
            state.favourites = []
        }
    }
})

export const favouriteActions = favouriteSlice.actions
export const favouriteReducer = favouriteSlice.reducer;