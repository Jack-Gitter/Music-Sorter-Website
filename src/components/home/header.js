import { useDispatch, useSelector } from "react-redux";
import {initiateLogin} from '../../state/reducers/songreducer'
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";
import Search from "../search/search";
const HeaderComponent = () => {
    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    return (
    <div className="homepage-alignment pb-4 pt-1">
            <h1 className="fg-white homepage-header">Curated Shuffle</h1>
            <div className="search-bar"><Search/></div>
    </div>
    );
}
export default HeaderComponent;
