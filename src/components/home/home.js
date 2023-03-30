import { useParams, useSearchParams } from "react-router-dom";
import HeaderComponent from "./header";
import PlaylistSelector from "./playlist-selector";
import Sliders from "./sliders";
import axios from "axios";

const Home = () => {
    const [searchParams] = useSearchParams(); 
    const code = searchParams.get('code');
    return (
        <>
        <HeaderComponent/>
        <PlaylistSelector/>
        <Sliders/>
        </>
    );
}
export default Home;
