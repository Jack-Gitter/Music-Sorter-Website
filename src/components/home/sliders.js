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
export let promise;

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
        <div className="row align-items-center justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0"> 
                <div className="row text-center">
                    <label className="form-label" for="acousticness-range">
                        <span className="slider-text-color me-2 ">acousticness</span>
                        <span className="slider-text-color ">{acousticness}</span>
                        {acousticnessEnabled && <button className={'btn btn-dark ms-2'} onClick={() => acousticnessStatus(false)}>Disable</button>}
                        {!acousticnessEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => acousticnessStatus(true)}>Enable</button>}
                    </label>
                </div>
                <div className="row">
                    <input id="acousticness-range" className="form-range p-4" disabled={!acousticnessEnabled} onChange={(e) => acousticnessUpdater(e.target.value)} type='range' min='0' max='100' value={acousticness}></input>
                </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
                <label for="danceability-range">
                    <span className="slider-text-color me-2 ">danceability</span>
                    <span className="slider-text-color ">{danceability}</span>
            {danceabilityEnabled && <button className={'btn btn-dark ms-2'} onClick={() => danceabilityStatus(false)}>Disable</button>}
            {!danceabilityEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => danceabilityStatus(true)}>Enable</button>}
                </label>
            </div>
            <div className="row">
                <input id="danceability-range" className="form-range p-4 " disabled={!danceabilityEnabled} onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='0' max='100' value={danceability}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0 ">
            <div className="row text-center">
                <label for="duration-range">
                    <span className="slider-text-color me-2 ">duration</span>
                    <span className="slider-text-color ">{duration_ms}</span>
            {durationEnabled && <button className={'btn btn-dark ms-2'} onClick={() => durationStatus(false)}>Disable</button>}
            {!durationEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => durationStatus(true)}>Enable</button>}
                </label>
            </div> 
            <div className="row">
                <input id="duration-range" className="form-range p-4 " disabled={!durationEnabled}onChange={(e) => durationUpdater(e.target.value)} type='range' min='0' max='100' value={duration_ms}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
                <label for="energy-range">
                    <span className="slider-text-color me-2 ">energy</span>
                    <span className="slider-text-color ">{energy}</span>
            {energyEnabled && <button className={'btn btn-dark ms-2'} onClick={() => energyStatus(false)}>Disable</button>}
            {!energyEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => energyStatus(true)}>Enable</button>}
                </label>
            </div>
            <div className="row">
                <input id="energy-range" className="form-range p-4 d-block"disabled={!energyEnabled} onChange={(e) => energyUpdater(e.target.value)} type='range' min='0' max='100' value={energy}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="instrumental-range">
                <span className="slider-text-color me-2 ">instrumentalness</span>
                <span className="slider-text-color ">{instrumentalness}</span>
            {instrumentalnessEnabled && <button className={'btn btn-dark ms-2'} onClick={() => instrumentalnessStatus(false)}>Disable</button>}
            {!instrumentalnessEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => instrumentalnessStatus(true)}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="instrumental-range" className="form-range p-4 " disabled={!instrumentalnessEnabled} onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='0' max='100' value={instrumentalness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="liveness-range">
                <span className="slider-text-color me-2 ">liveness</span>
                <span className="slider-text-color ">{liveness}</span>
            {livenessEnabled && <button className={'btn btn-dark ms-2'} onClick={() => livenessStatus(false)}>Disable</button>}
            {!livenessEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => livenessStatus(true)}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input  id="liveness-range" className="form-range p-4 " disabled={!livenessEnabled} onChange={(e) => livenessUpdater(e.target.value)} type='range' min='0' max='100' value={liveness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="loudness-range">
                <span className="slider-text-color me-2 ">loudness</span>
                <span className="slider-text-color ">{loudness}</span>
            { loudnessEnabled && <button className={'btn btn-dark ms-2'} onClick={() => loudnessStatus(false)}>Disable</button>}
            {!loudnessEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => loudnessStatus(true)}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="loudness-range" className="form-range p-4 " disabled={!loudnessEnabled} onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='0' max='100' value={loudness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="speechiness-range">
                <span className="slider-text-color me-2 ">speechiness</span>
                <span className="slider-text-color ">{speechiness}</span>
            {speechinessEnabled && <button className={'btn btn-dark ms-2'} onClick={() => speechinessStatus(false)}>Disable</button>}
            {!speechinessEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => speechinessStatus(true)}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="speechiness-range" className="form-range p-4 " disabled={!speechinessEnabled} onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='0' max='100' value={speechiness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0 justify-content-center ">
            <div className="row text-center">
            <label for="tempo-range">
                <span className="slider-text-color me-2 ">tempo</span>
                <span className="slider-text-color  ">{tempo}</span>
            {tempoEnabled && <button className={'btn btn-dark ms-2'} onClick={() => tempoStatus(false)}>Disable</button>}
            {!tempoEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => tempoStatus(true)}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input  id="tempo-range" className="form-range p-4 " disabled={!tempoEnabled} onChange={(e) => tempoUpdater(e.target.value)} type='range' min='0' max='100' value={tempo}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0  justify-content-center ">
           <div className="row text-center">
           <label for="valence-range">
                <span className="slider-text-color me-2 ">valence</span>
                <span className="slider-text-color  ">{valence}</span>
            {valenceEnabled && <button className={'btn btn-dark ms-2'} onClick={() => valenceStatus(false)}>Disable</button>}
            {!valenceEnabled && <button className={'btn btn-secondary ms-2'} onClick={() => valenceStatus(true)}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="valence-range" className="form-range p-4" disabled={!valenceEnabled} onChange={(e) => valenceUpdater(e.target.value)} type='range' min='0' max='100' value={valence}></input>
            </div>
        </div>
            <button className={'btn btn-dark ms-2'} disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
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
            promise = dispatcher(getTracksFromPlaylistThunk({id: currentPlaylist, sliders: slider_map}));
            }
        } >Update</button>
        </div>
    );
}
export default Sliders;