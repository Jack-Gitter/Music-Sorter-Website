import { createSlice } from "@reduxjs/toolkit";
import { setAccessTokenAPI } from "../../services/songservices";
import { getTracksFromPlaylistThunk, getUserPlaylistsThunk } from "../../services/songthunks";

const userInfo = createSlice({
    name: "intialSongs",
    initialState: {
        accessToken: "",
        refreshToken: "",
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
        setAccessToken(state, action) {
            state.accessToken = action.payload;
            setAccessTokenAPI(action.payload);
        },
        setRefreshToken(state, action) {
           state.refreshToken = action.payload; 
        },
        updateSliders(state, action) {
            state.sliders = action.payload;
        },
        songs(state, action) {
            console.log("hi");
        },
    },
    extraReducers: {
        [getUserPlaylistsThunk.fulfilled]:
            (state, {payload}) => {
                state.playlists = payload.items;
            },
        [getTracksFromPlaylistThunk.fulfilled]:
            (state, {payload}) => {
                state.songs = payload;
                console.log('this is the state \'s songs!')
                console.log(state.songs);
            }
    },
})

export const {setAccessToken, setRefreshToken, updateSliders, initiateLogin} = userInfo.actions;
export default userInfo.reducer;