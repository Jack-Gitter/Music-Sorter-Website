import { useDispatch, useSelector } from "react-redux";
import {initiateLogin} from '../../state/reducers/songreducer'
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";
import Search from "../search/search";
const HeaderComponent = () => {
    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    return (
    <div className="row header-color"> 
        <div className="col-sm-4 col-md-3 col-2 mt-3 mb-3 text-center">
            <h2 className="fg-white">Curated Shuffle</h2>
        </div>
           <Search/> 
        </div>
    );
}
export default HeaderComponent;
