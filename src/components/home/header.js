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
        <div className="col center-block text-center">
            <h1 className="fg-white">Curated Shuffle</h1>
        </div>
    </div>

    <div className="row d-flex justify-content-center align-items-center">
        <div className="col center-block">
            <div className="w-25"><Search/></div>
        </div>
    </div>

    </>
    );
}
export default HeaderComponent;
