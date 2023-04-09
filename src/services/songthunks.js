import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './songservices'

export const getUserPlaylistsThunk = createAsyncThunk(
    'profile/findPlaylists', 
    async () => await service.getUserPlaylists()
)

export const searchSpotifyThunk = createAsyncThunk(
    'search/FindPlaylists', 
    async (searchQuery) => await service.searchSpotify(searchQuery)
)

export const getTracksFromPlaylistThunk = createAsyncThunk(
    'profile/findTracksFromPlaylist',
    async ({id, sliders}) => await service.getTracksFromPlaylist(id, sliders)
)

export const getBoundedVariablesThunk = createAsyncThunk(
    'profile/getBoundedVars', 
    async (id) => await service.getBoundedVariables(id)
)

export const getPlaylistIMGThunk = createAsyncThunk(
    'profile/GetPlaylistIMG',
    async (id) => await service.getPlaylistIMG(id)
)

export const setPlayerStateThunk = createAsyncThunk(
    'profile/setState', 
    async (state) => await service.setPlayerState(state)
)