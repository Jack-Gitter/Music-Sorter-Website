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
                <div className="col-4"></div>
                <div className="col-5">
                    <h1 className="fg-green">
                        Curated Shuffle
                    </h1>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-6">
                    <Search/>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}
export default HeaderComponent;
