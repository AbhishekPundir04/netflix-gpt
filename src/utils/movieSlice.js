import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies: null,
        nowMoviesTrailer:null,

    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addMoviesTrailerKey : (state,action)=>{
            state.nowMoviesTrailer = action.payload
        }
    }
})
export const {addNowPlayingMovies,addMoviesTrailerKey} = moviesSlice.actions
export default moviesSlice.reducer;