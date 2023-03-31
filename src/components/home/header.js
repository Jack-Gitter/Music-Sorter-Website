import { useDispatch, useSelector } from "react-redux";
import {initiateLogin} from '../../state/reducers/songreducer'
import {useLocation} from 'react-router-dom';
const HeaderComponent = () => {
    const {accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    return (
        <div>
            <h1>
                Curated Shuffle
            </h1>
        </div>
    );
}
export default HeaderComponent;
