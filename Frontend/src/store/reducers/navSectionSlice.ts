import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: {value: string[]} = {
    value: [],
}

export const navSectionSlice = createSlice({
    name: "navSection",
    initialState,
    
    reducers: {
        setChapters: (state,action: PayloadAction<string[]>) => {
            state.value = action.payload;
        }
    }
})

export const {setChapters} = navSectionSlice.actions;

export default navSectionSlice.reducer;