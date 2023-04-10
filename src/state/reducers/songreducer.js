import { createSlice } from "@reduxjs/toolkit";
import { setAccessTokenAPI } from "../../services/songservices";
import { getPlaylistIMGThunk, getTracksFromPlaylistThunk, getUserPlaylistsThunk} from "../../services/songthunks";
import { getBoundedVariablesThunk } from "../../services/songthunks";
import { searchSpotifyThunk } from "../../services/songthunks";

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
        playlistIMG: "",
        playerState: {},
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
        setSongs(state, action) {
            state.songs = action.payload
        },
        setLoadingSongs(state, action) {
            state.loadingSongs = action.payload
        },
        setCurrentPlaylist(state, action) {
            state.currentPlaylist = action.payload;
        },
        setLoadingMetrics(state, action) {
            state.loadingMetrics = action.payload;
        },
        setPlayerState(state, action) {
            console.log(action.payload)
            state.playerState = action.payload
        }
    },
    extraReducers: {
        [getUserPlaylistsThunk.fulfilled]:
            (state, {payload}) => {
                state.playlists = payload.items;
            },
        [searchSpotifyThunk.fulfilled]:
            (state, {payload}) => {
                state.playlists = payload.playlists.items;
            },
        [getTracksFromPlaylistThunk.fulfilled]:
            (state, {payload}) => {
                state.loadingSongs = false;
                payload.sort((song1, song2) => song1.curated_value - song2.curated_value)
                state.songs = payload
            },
        [getTracksFromPlaylistThunk.rejected]:
            (state, {payload}) => {
                state.loadingSongs = false;
                state.songs = []
            },
        [getBoundedVariablesThunk.fulfilled]: 
            (state, {payload}) => {
                state.maxDuration = payload[0];
                state.minDuration = payload[1];
                state.maxTempo = payload[2];
                state.minTempo = payload[3];
                state.loadingMetrics = false;
            }, 
        [getBoundedVariablesThunk.rejected]:
            (state, {payload}) => {
                state.loadingMetrics = false;
            },
        [getPlaylistIMGThunk.fulfilled]:
            (state, {payload}) => {
                state.playlistIMG = payload
            }
    },
})

export const {setPlayerState, setSongs, setLoadingMetrics, setCurrentPlaylist, setLoadingSongs, setAccessToken, setRefreshToken, updateSliders, initiateLogin} = userInfo.actions;
export default userInfo.reducer;