import SpotifyWebApi from "spotify-web-api-js"
import userInfoReducer from '../state/reducers/songreducer'

const spotifyWebApiHandler = new SpotifyWebApi();

export const setAccessTokenAPI = (access_token) => {
    spotifyWebApiHandler.setAccessToken(access_token);
}

export const getUserPlaylists = async () => {
    const playlists = await spotifyWebApiHandler.getUserPlaylists();
    return playlists;
}

//export const getUserPlaylistsThunk 
