import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './songservices'

export const getUserPlaylistsThunk = createAsyncThunk(
    'profile/findPalylists', 
    async () => await service.getUserPlaylists()
)