import { createSlice } from "@reduxjs/toolkit";
// import Movie from "../utils/"

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        videoTrailer:null,
        topRated:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        videoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
    addTopRatedMovies:(state,action)=>{
        state.topRated=action.payload;
    }
    }

})

export const {addNowPlayingMovies, videoTrailer ,addTopRatedMovies} =movieSlice.actions
export default movieSlice.reducer;