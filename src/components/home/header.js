import { useDispatch, useSelector } from "react-redux";
import {initiateLogin} from '../../state/reducers/songreducer'
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";
import Search from "../search/search";
const HeaderComponent = () => {
    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    return (
    <div className="header-color">
    <div className="row"> 
        <div className="col-sm-4 col-md-3 col-2 mt-2 mb-2 center-block text-center">
            <h2 className="fg-white">Curated Shuffle</h2>
        </div>
           <Search/> 
        </div>
    </div>
    );
}
export default HeaderComponent;
