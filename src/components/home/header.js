import { useDispatch, useSelector } from "react-redux";
import {initiateLogin} from '../../state/reducers/songreducer'
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";
import Search from "../search/search";
const HeaderComponent = () => {
    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    return (
    <>

    <div className="row">
        <div className="col">
            <h1 className="fg-white">Curated Shuffle</h1>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="w-50"><Search/></div>
        </div>
    </div>

    </>
    );
}
export default HeaderComponent;
