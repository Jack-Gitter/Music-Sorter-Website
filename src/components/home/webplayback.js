import SpotifyPlayer from "react-spotify-web-playback"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerState } from "../../state/reducers/songreducer";

const WebPlayback = () => {

    const dispatcher = useDispatch()
    const {currentPlaylist, loadingSongs, songUris, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    if (!accessToken) return null
    return (
        <div className="row ms-3 me-3 position-relative wp">
        {songUris.length > 0 && <SpotifyPlayer 
        styles={{
            activeColor: '#fff',
            bgColor: '#212529',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
            sliderHandleColor:'#ffff',
            errorColor:'#FF0000'
          }}
        token={accessToken}
        layout={'responsive'}
        play={true}
        uris={songUris}
        callback={(state) => { dispatcher(setPlayerState(state)) }}
        magnifySliderOnHover={true}
        />}
        </div>
    );
}
export default WebPlayback;
