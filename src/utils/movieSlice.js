import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        nowMoviesTrailer: null,
        popularMoviesData: null

    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMoviesData = action.payload
        },
        addMoviesTrailerKey: (state, action) => {
            state.nowMoviesTrailer = action.payload
        },

    }
})
export const { addNowPlayingMovies, addMoviesTrailerKey, addPopularMovies } = moviesSlice.actions
export default moviesSlice.reducer;