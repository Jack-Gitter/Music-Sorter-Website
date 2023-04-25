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
        songUris: [],
        playlistIMG: "",
        playerState: {},
        firstSongDisplayedIDX: 0,
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
        },
        sliderEnabled: {
            acousticness: true,
            danceability: true,
            duration_ms: true,
            energy: true,
            instrumentalness: true,
            liveness: true,
            loudness: true,
            speechiness: true,
            tempo: true,
            valence: true
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
        updateSliderEnabled(state, action) {
            state.sliderEnabled = action.payload
            console.log(state.sliderEnabled)
        },
        setSongs(state, action) {
            state.songs = action.payload
            state.songUris = [];
            for (let i = 0; i < state.songs.length && i < 774; i++) {
                state.songUris.push(state.songs[i].uri);
            }

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
            state.playerState = action.payload
            if (state.playerState.nextTracks !== undefined && state.playerState.nextTracks.length > 0) {
                let trackID = state.playerState.nextTracks[0].id
                    for (let i = 0; i < state.songs.length; i++) {
                        if (state.songs[i].id === trackID) {
                            state.firstSongDisplayedIDX = i
                        }
                    }
                }
        },
        setPlaylistIMG(state, action) {
            state.playlistIMG = action.payload
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
                payload = payload.filter((song) => song.album !== undefined) 
                payload.sort((song1, song2) => song1.curated_value - song2.curated_value)
                state.songs = payload
                console.log(state.songs)
                state.songUris = []
                for (let i = 0; i < state.songs.length && i < 774; i++) {
                    state.songUris.push(state.songs[i].uri);
                }

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
                console.log('we loaded bounded vars')
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

export const {updateSliderEnabled, setPlaylistIMG, setPlayerState, setSongs, setLoadingMetrics, setCurrentPlaylist, setLoadingSongs, setAccessToken, setRefreshToken, updateSliders, initiateLogin} = userInfo.actions;
export default userInfo.reducer;