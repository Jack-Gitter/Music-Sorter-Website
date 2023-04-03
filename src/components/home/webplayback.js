import { useEffect } from "react";
import { useSelector } from "react-redux";
const WebPlayback = () => {

    const {loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);

    useEffect(() => {
        const interval = setInterval(() => {
            const element = document.getElementById('songplayer')
            //const test = element.querySelector('.hlkjJv66EOvqb0PbtvMr')
            //const element = document.getElementsByClassName('ZblRSxh8IUxjcEApoZVg');
            console.log(element)
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    let str = ""
    if (songs.length > 0) {
        console.log(songs[0].id)
        str = `https://open.spotify.com/embed/track/${songs[0].id}?utm_source=generator`
    }

    //setInterval(console.log('hi'), 1000)

    return (
        <>
        <iframe id='songplayer' src={str} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </>
    );
}
export default WebPlayback;
