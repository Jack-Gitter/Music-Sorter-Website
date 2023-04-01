import { createSlice } from "@reduxjs/toolkit";
import { setAccessTokenAPI } from "../../services/songservices";
import { getTracksFromPlaylistThunk, getUserPlaylistsThunk } from "../../services/songthunks";
import { getBoundedVariablesThunk } from "../../services/songthunks";

const userInfo = createSlice({
    name: "intialSongs",
    initialState: {
        loadingMetrics: false,
        maxDuration: 0,
        minDuration: 0,
        maxTempo: 0,
        minTempo: 0,
        currentPlaylist: -1,
        loadingSongs: false,
        accessToken: "",
        refreshToken: "",
        playlists: [],
        songs: [],
        sliders: {
            acousticness: 50,
            danceability: 50,
            duration_ms: 50,
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
        setLoadingSongs(state, action) {
            state.loadingSongs = action.payload
        },
        setCurrentPlaylist(state, action) {
            state.currentPlaylist = action.payload;
        },
        setLoadingMetrics(state, action) {
            state.loadingMetrics = action.payload;
        }
    },
    extraReducers: {
        [getUserPlaylistsThunk.fulfilled]:
            (state, {payload}) => {
                state.playlists = payload.items;
                state.currentPlaylist = payload.items[0].id
            },
        [getTracksFromPlaylistThunk.fulfilled]:
            (state, {payload}) => {
                state.loadingSongs = false;
                console.log(state.loadingSongs)
                state.songs = payload;
                state.songs.sort((song1, song2) => song1.curated_value - song2.curated_value);
                console.log('this is the state \'s songs!')
                console.log(state.songs);
            },
        [getBoundedVariablesThunk.fulfilled]: 
            (state, {payload}) => {
                state.maxDuration = payload[0];
                state.minDuration = payload[1];
                state.maxTempo = payload[2];
                state.minTempo = payload[3];
                console.log('max duration is : ' + state.maxDuration)
                console.log('min Duration is: ' + state.minDuration)
                console.log('max tempo is ' + state.maxTempo)
                console.log('min tempo is: ' + state.minTempo)
                state.loadingMetrics = false;
            }
    },
})

export const {setLoadingMetrics, setCurrentPlaylist, setLoadingSongs, setAccessToken, setRefreshToken, updateSliders, initiateLogin} = userInfo.actions;
export default userInfo.reducer;