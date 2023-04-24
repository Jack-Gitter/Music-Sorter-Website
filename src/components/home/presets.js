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
        <div className="row m-0">
        <div className="col  p-0 m-0">
            <button className="preset-button btn rounded-0 btn-green w-100 m-0"
            onClick={() => {
                    dispatcher(updateSliderEnabled({...defaultDisabled, energy: true, danceiability: true, tempo: true, valence: true}));
                    dispatcher(updateSliders({...sliders, energy: 70, danceiability: 70, tempo:60, valence:90}));
                }
            }>
            main character
            </button>
        </div>

        <div className="col  p-0 m-0">
        <button className="preset-button btn rounded-0 btn-blue w-100 m-0"
        onClick={() => {
                dispatcher(updateSliderEnabled({...defaultDisabled, tempo: true, energy: true, instrumentalness: true, loudness: true, speechiness: true, valence: true}));
                dispatcher(updateSliders({...sliders, tempo: 30, energy: 50, instrumentalness:60, loudness:30, speechiness: 35, valence: 50}));
            }
        }>
        study
        </button>
        </div>

        <div className="col  p-0 m-0">
        <button className="preset-button btn rounded-0 btn-red w-100 m-0"
        onClick={() => {
            dispatcher(updateSliderEnabled({...defaultDisabled, energy: true, loudness: true, valence: true}));
            dispatcher(updateSliders({...sliders, danceability: 80, energy: 100, loudness: 85, tempo: 90}));
        }
        }>
        gym
        </button>
        </div>

        <div className="col  p-0 m-0">
        <button className="preset-button btn rounded-0 btn-yellow w-100 m-0"
        onClick={() => {
            dispatcher(updateSliderEnabled({...defaultDisabled, danceability: true, energy: true, loudness: true, valence: true}));
            dispatcher(updateSliders({...sliders, danceability: 100, energy: 100, loudness: 100, valence: 100}));
        }
        }>
        party
        </button>
        </div>
        
        <div className="col  p-0 m-0">
        <button className="preset-button btn rounded-0 btn-gray w-100 m-0"
        onClick={() => {
            dispatcher(updateSliderEnabled({...defaultDisabled, energy: true, valence: true, loudness: true}));
            dispatcher(updateSliders({...sliders, energy: 0, loudness: 35, valence: 100 }));
        }
        }>
        post game vibes
        </button>
        </div>
        </div>
    );
}
export default Presets;