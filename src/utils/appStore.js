import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice";
import gptSlice from "./gptSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSlice:gptSlice,
    }
})

export default appStore;