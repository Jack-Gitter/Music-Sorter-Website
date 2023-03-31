import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './songservices'

export const getUserPlaylistsThunk = createAsyncThunk(
    'profile/findPlaylists', 
    async () => await service.getUserPlaylists()
)

export const getTracksFromPlaylistThunk = createAsyncThunk(
    'profile/findTracksFromPlaylist',
    async (id) => await service.getTracksFromPlaylist(id)
)