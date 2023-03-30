import { createSlice } from "@reduxjs/toolkit";

const songInfo = createSlice({
    name: "intialSongs",
    initialState: {
        songs: [],
        sliders: {
            acousticness: 50,
            danceability: 50,
            duration: 50,
            energy: 50,
            instrumentalness: 50,
            liveness: 50,
            loudness: 50,
            speechiness: 50,
            tempo: 50,
            valence: 50,
        }
    },
    reducers: {
        updateSliders(state, action) {
            console.log("yuh")
            state.sliders = action.payload;
        }
    }
})

export const {updateSliders} = songInfo.actions;
export default songInfo.reducer;