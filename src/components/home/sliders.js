import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setLoadingSongs, updateSliders } from "../../state/reducers/songreducer";
import { useDispatch } from "react-redux";
import { getTracksFromPlaylist } from "../../services/songservices";
import { getBoundedVariablesThunk, getTracksFromPlaylistThunk } from "../../services/songthunks";
import { Slider, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";


const Sliders = () => {

    const {loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
    const dispatcher = useDispatch();

    const [acousticness, acousticnessUpdater] = useState(sliders.acousticness);
    const [danceability, danceabilityUpdater] = useState(sliders.danceability);
    const [duration_ms, durationUpdater] = useState(sliders.duration_ms);
    const [energy, energyUpdater] = useState(sliders.energy);
    const [instrumentalness, instrumentalnessUpdater] = useState(sliders.instrumentalness);
    const [liveness, livenessUpdater] = useState(sliders.liveness);
    const [loudness, loudnessUpdater] = useState(sliders.loudness);
    const [speechiness, speechinessUpdater] = useState(sliders.speechiness);
    const [tempo, tempoUpdater] = useState(sliders.tempo);
    const [valence, valenceUpdater] = useState(sliders.valence);
    

    const [acousticnessEnabled, acousticnessStatus] = useState(true)
    const [danceabilityEnabled, danceabilityStatus] = useState(true)
    const [durationEnabled, durationStatus] = useState(true)
    const [energyEnabled, energyStatus] = useState(true)
    const [instrumentalnessEnabled, instrumentalnessStatus] = useState(true)
    const [livenessEnabled, livenessStatus] = useState(true)
    const [speechinessEnabled, speechinessStatus] = useState(true)
    const [tempoEnabled, tempoStatus] = useState(true)
    const [valenceEnabled, valenceStatus] = useState(true)
    const [loudnessEnabled, loudnessStatus] = useState(true)

    return (
        <div className="row m-0 d-flex align-items-center justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">acousticness</span>
                <span className="slider-text-color ">{acousticness}</span>
                <br></br>
                <input className="form-range " disabled={!acousticnessEnabled} onChange={(e) => acousticnessUpdater(e.target.value)} type='range' min='0' max='100' value={acousticness}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
                {acousticnessEnabled && <button className={'btn btn-dark'} onClick={() => acousticnessStatus(false)}>Disable</button>}
                {!acousticnessEnabled && <button className={'btn btn-secondary'} onClick={() => acousticnessStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">danceability</span>
                <span className="slider-text-color ">{danceability}</span>
                <br></br>
                <input className="form-range " disabled={!danceabilityEnabled} onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='0' max='100' value={danceability}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {danceabilityEnabled && <button className={'btn btn-dark'} onClick={() => danceabilityStatus(false)}>Disable</button>}
            {!danceabilityEnabled && <button className={'btn btn-secondary'} onClick={() => danceabilityStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">duration</span>
                <span className="slider-text-color ">{duration_ms}</span>
                <br></br>
                <input className="form-range " disabled={!durationEnabled}onChange={(e) => durationUpdater(e.target.value)} type='range' min='0' max='100' value={duration_ms}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {durationEnabled && <button className={'btn btn-dark'} onClick={() => durationStatus(false)}>Disable</button>}
            {!durationEnabled && <button className={'btn btn-secondary'} onClick={() => durationStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">energy</span>
                <span className="slider-text-color ">{energy}</span>
                <br></br>
                <input className="form-range "disabled={!energyEnabled} onChange={(e) => energyUpdater(e.target.value)} type='range' min='0' max='100' value={energy}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {energyEnabled && <button className={'btn btn-dark'} onClick={() => energyStatus(false)}>Disable</button>}
            {!energyEnabled && <button className={'btn btn-secondary'} onClick={() => energyStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">instrumentalness</span>
                <span className="slider-text-color ">{instrumentalness}</span>
                <br></br>
                <input className="form-range " disabled={!instrumentalnessEnabled} onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='0' max='100' value={instrumentalness}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {instrumentalnessEnabled && <button className={'btn btn-dark'} onClick={() => instrumentalnessStatus(false)}>Disable</button>}
            {!instrumentalnessEnabled && <button className={'btn btn-secondary'} onClick={() => instrumentalnessStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">liveness</span>
                <span className="slider-text-color ">{liveness}</span>
                <br></br>
                <input  className="form-range " disabled={!livenessEnabled} onChange={(e) => livenessUpdater(e.target.value)} type='range' min='0' max='100' value={liveness}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {livenessEnabled && <button className={'btn btn-dark'} onClick={() => livenessStatus(false)}>Disable</button>}
            {!livenessEnabled && <button className={'btn btn-secondary'} onClick={() => livenessStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">loudness</span>
                <span className="slider-text-color ">{loudness}</span>
                <br></br>
                <input className="form-range " disabled={!loudnessEnabled} onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='0' max='100' value={loudness}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            { loudnessEnabled && <button className={'btn btn-dark'} onClick={() => loudnessStatus(false)}>Disable</button>}
            {!loudnessEnabled && <button className={'btn btn-secondary'} onClick={() => loudnessStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <span className="slider-text-color ">speechiness</span>
                <span className="slider-text-color ">{speechiness}</span>
                <br></br>
                <input className="form-range " disabled={!speechinessEnabled} onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='0' max='100' value={speechiness}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {speechinessEnabled && <button className={'btn btn-dark'} onClick={() => speechinessStatus(false)}>Disable</button>}
            {!speechinessEnabled && <button className={'btn btn-secondary'} onClick={() => speechinessStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center justify-content-center ">
                <span className="slider-text-color ">tempo</span>
                <span className="slider-text-color ">{tempo}</span>
                <br/>
                <input  className="form-range " disabled={!tempoEnabled} onChange={(e) => tempoUpdater(e.target.value)} type='range' min='0' max='100' value={tempo}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {tempoEnabled && <button className={'btn btn-dark'} onClick={() => tempoStatus(false)}>Disable</button>}
            {!tempoEnabled && <button className={'btn btn-secondary'} onClick={() => tempoStatus(true)}>Enable</button>}
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center justify-content-center ">
                <span className="slider-text-color ">valence</span>
                <span className="slider-text-color ">{valence}</span>
                <br/>
                <input className="form-range " disabled={!valenceEnabled} onChange={(e) => valenceUpdater(e.target.value)} type='range' min='0' max='100' value={valence}></input>
        </div>
        <div className="col-1 d-flex align-items-end">
            {valenceEnabled && <button className={'btn btn-dark'} onClick={() => valenceStatus(false)}>Disable</button>}
            {!valenceEnabled && <button className={'btn btn-secondary'} onClick={() => valenceStatus(true)}>Enable</button>}
        </div>
            <button className={'btn btn-dark m-2'} disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
            dispatcher(updateSliders(
                {
                    acousticness: acousticness,
                    danceability: danceability,
                    duration_ms: duration_ms,
                    energy: energy,
                    instrumentalness: instrumentalness,
                    liveness: liveness,
                    loudness: loudness,
                    speechiness: speechiness,
                    tempo: tempo,
                    valence: valence
                }
            ));
            dispatcher(setLoadingSongs(true));
                // when we are calling this, make sure to only include the metrics that are enabled on the website
            let slider_map = {}
            if (acousticnessEnabled) {
                slider_map.acousticness = acousticness/100
            }
            if (danceabilityEnabled) {
                slider_map.danceability = danceability/100
            }
            if (durationEnabled) {
                slider_map.duration_ms = ((duration_ms) / 100) * (maxDuration - minDuration) + minDuration
                console.log('duration is' + slider_map.duration_ms)
            }
            if (tempoEnabled) {
                slider_map.tempo = ((tempo) / 100) * (maxTempo - minTempo) + minTempo 
            }
            if (energyEnabled) {
                slider_map.energy = energy/100
            }
            if (loudnessEnabled) {
                slider_map.loudness = ((loudness) / 100) * 60 + -60
            }
            if (instrumentalnessEnabled) {
                slider_map.instrumentalness = instrumentalness/100
            }
            if (livenessEnabled) {
                slider_map.liveness = liveness/100
            }
            if (speechinessEnabled) {
                slider_map.speechiness = speechiness/100
            }
            if (valenceEnabled) {
                slider_map.valence = valence/100
            }
            dispatcher(getTracksFromPlaylistThunk({id: currentPlaylist, sliders: slider_map}));
            }
        } >Update</button>
        <Link to={'/'}><button className={'btn btn-dark '}>Logout</button></Link>
        </div>
    );
}
export default Sliders;
