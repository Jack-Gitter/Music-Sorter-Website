import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './songservices'

export const getUserPlaylistsThunk = createAsyncThunk(
    'profile/findPlaylists', 
    async () => await service.getUserPlaylists()
)

export const getTracksFromPlaylistThunk = createAsyncThunk(
    'profile/findTracksFromPlaylist',
    async ({id, sliders}) => await service.getTracksFromPlaylist(id, sliders)
)

export const getBoundedVariablesThunk = createAsyncThunk(
    'profile/getBoundedVars', 
    async (id) => await service.getBoundedVariables(id)
)