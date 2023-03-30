
import axios from "axios";

export const login = async () => {
    const response = await axios({
        method: 'get',
        url: 'http://localhost:8888/login',
        data: {
            client_id: '8b475aa1a9774f11bc38e082a8cb8f6b',
            response_type: 'code',
            redirect_uri: 'http://localhost:3000'
        }
    });
    return response; 
}

// find all the songs from a playlist
export const findSongsFromPlaylist = async (playlist) => {

}

// finds all of the playlists from a user
export const findUserPlaylists = async (user) => {
    
}

// make a method that does authentication
// make a method that finds the playlists of a user
// make a method that finds all of the songs in a specific playlist
// make a method that gets the metric data for songs
// make a local method that sorts the songs based on their metrics
