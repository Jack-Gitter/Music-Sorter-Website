import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "intialSongs",
    initialState: {
        playlists: [],
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
            state.sliders = action.payload;
        },
        sortSongs(state, action) {
            console.log("hi");
        }
    }
})

export const {updateSliders} = userInfo.actions;
export default userInfo.reducer;