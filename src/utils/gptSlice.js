import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptValue: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptValue = !state.showGptValue;
        },
       

    }
})
export const { toggleGptSearchView, } = gptSlice.actions;
export default gptSlice.reducer;