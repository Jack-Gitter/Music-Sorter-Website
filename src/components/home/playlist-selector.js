import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracksFromPlaylistThunk } from "../../services/songthunks";
import { setLoadingSongs } from "../../state/reducers/songreducer"; 
// set a variable when we change the playlist to true. If we try to change the playlist while the var is true, then do something?
// for now set a variable and when we change the playlist set it to true, display something else while this var is truee and set to false in the thunk
const PlaylistSelector = () => {

    const dispatcher = useDispatch();
    // eslint-disable-next-line
    const {loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const getPlaylistID = (n) => {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].name === n) {
                return playlists[i].id;
            }
        } 
    }

    return (
        <>
        <select disabled={loadingSongs} onChange={(e) => {
                console.log(loadingSongs)
                dispatcher(setLoadingSongs(true));
                dispatcher(getTracksFromPlaylistThunk({id: getPlaylistID(e.target.value), sliders}))
                }
            }>
                {playlists.map((plist, index) => <option disabled={loadingSongs}key={index}>{plist.name}</option>)}
            </select> 
        </>
    );
}
export default PlaylistSelector;
