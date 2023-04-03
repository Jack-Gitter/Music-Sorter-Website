import { useSelector } from "react-redux";
const WebPlayback = () => {

    const {loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);

    let str = ""
    if (songs.length > 0) {
        console.log(songs[0].id)
        str = `https://open.spotify.com/embed/track/${songs[0].id}?utm_source=generator`
    }


    return (
        <>
        <iframe src={str} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </>
    );
}
export default WebPlayback;
