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

export const getTracks = async (id) => {
    console.log(id);
    const tracks = await spotifyWebApiHandler.getAlbumTracks(id);
    return tracks;
}

//export const getUserPlaylistsThunk 
