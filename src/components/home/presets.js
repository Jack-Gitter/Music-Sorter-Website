import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSliderEnabled, updateSliders } from "../../state/reducers/songreducer";

const Presets = () => {

    const {sliderEnabled, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();
    const defaultDisabled = {
        acousticness: false,
        danceability: false,
        duration_ms: false,
        energy: false,
        instrumentalness: false,
        liveness: false,
        loudness: false,
        speechiness: false,
        tempo: false,
        valence: false
    }
    return (
        <>
        <button className="btn btn-success"
        onClick={() => {
                dispatcher(updateSliderEnabled({...defaultDisabled, energy: true, danceiability: true, tempo: true, valence: true}));
                dispatcher(updateSliders({...sliders, energy: 70, danceiability: 70, tempo:60, valence:90}));
            }
        }>
        Main Character
        </button>

        <button className="btn btn-info"
        onClick={() => {
                dispatcher(updateSliderEnabled({...defaultDisabled, tempo: true, energy: true, instrumentalness: true, loudness: true, speechiness: true, valence: true}));
                dispatcher(updateSliders({...sliders, tempo: 30, energy: 50, instrumentalness:60, loudness:30, speechiness: 35, valence: 50}));
            }
        }>
        Study
        </button>

        <button className="btn btn-danger"
        onClick={() => {
            dispatcher(updateSliderEnabled({...defaultDisabled, danceability: true, energy: true, loudness: true, tempo: true}));
            dispatcher(updateSliders({...sliders, danceability: 80, energy: 100, loudness: 85, tempo: 90}));
        }
        }>
        Gym
        </button>

        <button className="btn btn-warning"
        onClick={() => {
            dispatcher(updateSliderEnabled({...defaultDisabled, danceability: true, duration_ms: true, energy: true, instrumentalness: true, liveness: true, loudness: true, tempo: true, valence: true}));
            dispatcher(updateSliders({...sliders, danceability: 100, duration_ms: 40, energy: 100, instrumentalness: 20, liveness: 0, loudness: 70, tempo: 70, valence: 80}));
        }
        }>
        Party
        </button>
        <button className="btn btn-secondary"
        onClick={() => {
            dispatcher(updateSliderEnabled({...defaultDisabled, acousticness: true, energy: true, valence: true, tempo: true, loudness: true}));
            dispatcher(updateSliders({...sliders, acousticness: 50, energy: 25, valence: 40, tempo: 30, loudness: 30}));
        }
        }>

        Post game vibes
        </button>
        </>
    );
}
export default Presets;