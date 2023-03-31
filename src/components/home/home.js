import { useParams, useSearchParams } from "react-router-dom";
import HeaderComponent from "./header";
import PlaylistSelector from "./playlist-selector";
import Sliders from "./sliders";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CurrentSong from "./currentsong";

const Home = () => {

    const location = useLocation().pathname;
    const access_start = location.indexOf('access_token')
    const access_end = location.indexOf('&');
    const access_token = location.substring(access_start + 'access_token='.length, access_end);
    const refresh_start = location.indexOf('refresh_token');
    const refresh_token = location.substring(refresh_start + 'refresh_token='.length, location.length);

    return (
        <>
            <HeaderComponent/>
            <PlaylistSelector/>
            <Sliders/>
            <CurrentSong/>
        </>
    );
}
export default Home;
