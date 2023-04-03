import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function WebPlayback() {


  const {loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
  const [player, setPlayer] = useState(undefined);

  useEffect(() => {

    const script = document.createElement("script");
    script.src = `https://sdk.scdn.co/spotify-player.js`;
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

        const player = new window.Spotify.Player({
            name: 'Web Playback SDK',
            getOAuthToken: cb => { cb(accessToken); },
            volume: 0.5
        });

        setPlayer(player);

        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });

        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.connect();

        
    };
}, [accessToken]);
  

   return (
      <>
           <div className="main-wrapper">
                YUHHHHH
            </div>
      </>
    );
}

export default WebPlayback
