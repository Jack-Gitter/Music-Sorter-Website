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
import { updateSliderEnabled } from "../../state/reducers/songreducer";
export let promise;

const Sliders = () => {

    const {sliderEnabled, loadingMetrics, maxDuration, minDuration, maxTempo, minTempo, currentPlaylist, loadingSongs, accessToken, refreshToken, playlists, songs, sliders} = useSelector((store) => store.userInfoReducer);
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
    

    return (
        <div className="row align-items-center justify-content-center ms-3 mt-4 me-3">
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0"> 
                <div className="row text-center">
                    <label className="form-label" for="acousticness-range">
                        <span className="slider-text-color me-2 ">acousticness</span>
                        <span className="slider-text-color ">{acousticness}</span>
                        {sliderEnabled.acousticness && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, acousticness: false}))}>Disable</button>}
                        {!sliderEnabled.acousticness && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, acousticness: true}))}>Enable</button>}
                    </label>
                </div>
                <div className="row">
                    <input id="acousticness-range" className="form-range p-4" disabled={!sliderEnabled.acousticness} onChange={(e) => acousticnessUpdater(e.target.value)} type='range' min='0' max='100' value={acousticness}></input>
                </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
                <label for="danceability-range">
                    <span className="slider-text-color me-2 ">danceability</span>
                    <span className="slider-text-color ">{danceability}</span>
            {sliderEnabled.danceability && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, danceability: false}))}>Disable</button>}
            {!sliderEnabled.danceability && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, danceability: true}))}>Enable</button>}
                </label>
            </div>
            <div className="row">
                <input id="danceability-range" className="form-range p-4 " disabled={!sliderEnabled.danceability} onChange={(e) => danceabilityUpdater(e.target.value)} type='range' min='0' max='100' value={danceability}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0 ">
            <div className="row text-center">
                <label for="duration-range">
                    <span className="slider-text-color me-2 ">duration</span>
                    <span className="slider-text-color ">{duration_ms}</span>
            {sliderEnabled.duration && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, duration: false}))}>Disable</button>}
            {!sliderEnabled.duration && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, duration: true}))}>Enable</button>}
                </label>
            </div> 
            <div className="row">
                <input id="duration-range" className="form-range p-4 " disabled={!sliderEnabled.duration}onChange={(e) => durationUpdater(e.target.value)} type='range' min='0' max='100' value={duration_ms}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
                <label for="energy-range">
                    <span className="slider-text-color me-2 ">energy</span>
                    <span className="slider-text-color ">{energy}</span>
            {sliderEnabled.energy && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, energy: false}))}>Disable</button>}
            {!sliderEnabled.energy && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, energy: true}))}>Enable</button>}
                </label>
            </div>
            <div className="row">
                <input id="energy-range" className="form-range p-4 d-block"disabled={!sliderEnabled.energy} onChange={(e) => energyUpdater(e.target.value)} type='range' min='0' max='100' value={energy}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="instrumental-range">
                <span className="slider-text-color me-2 ">instrumentalness</span>
                <span className="slider-text-color ">{instrumentalness}</span>
            {sliderEnabled.instrumentalness && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, instrumentalness: false}))}>Disable</button>}
            {!sliderEnabled.instrumentalness && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, instrumentalness: true}))}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="instrumental-range" className="form-range p-4 " disabled={!sliderEnabled.instrumentalness} onChange={(e) => instrumentalnessUpdater(e.target.value)} type='range' min='0' max='100' value={instrumentalness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="liveness-range">
                <span className="slider-text-color me-2 ">liveness</span>
                <span className="slider-text-color ">{liveness}</span>
            {sliderEnabled.liveness && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, liveness: false}))}>Disable</button>}
            {!sliderEnabled.liveness && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, liveness: true}))}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input  id="liveness-range" className="form-range p-4 " disabled={!sliderEnabled.liveness} onChange={(e) => livenessUpdater(e.target.value)} type='range' min='0' max='100' value={liveness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="loudness-range">
                <span className="slider-text-color me-2 ">loudness</span>
                <span className="slider-text-color ">{loudness}</span>
            { sliderEnabled.loudness && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, loudness: false}))}>Disable</button>}
            {!sliderEnabled.loudness && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, loudness: true}))}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="loudness-range" className="form-range p-4 " disabled={!sliderEnabled.loudness} onChange={(e) => loudnessUpdater(e.target.value)} type='range' min='0' max='100' value={loudness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0">
            <div className="row text-center">
            <label for="speechiness-range">
                <span className="slider-text-color me-2 ">speechiness</span>
                <span className="slider-text-color ">{speechiness}</span>
            {sliderEnabled.speechiness && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, speechiness: false}))}>Disable</button>}
            {!sliderEnabled.speechiness && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, speechiness: true}))}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="speechiness-range" className="form-range p-4 " disabled={!sliderEnabled.speechiness} onChange={(e) => speechinessUpdater(e.target.value)} type='range' min='0' max='100' value={speechiness}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0 justify-content-center ">
            <div className="row text-center">
            <label for="tempo-range">
                <span className="slider-text-color me-2 ">tempo</span>
                <span className="slider-text-color  ">{tempo}</span>
            {sliderEnabled.tempo && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, tempo: false}))}>Disable</button>}
            {!sliderEnabled.tempo && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, tempo: true}))}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input  id="tempo-range" className="form-range p-4 " disabled={!sliderEnabled.tempo} onChange={(e) => tempoUpdater(e.target.value)} type='range' min='0' max='100' value={tempo}></input>
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-0 p-0  justify-content-center ">
           <div className="row text-center">
           <label for="valence-range">
                <span className="slider-text-color me-2 ">valence</span>
                <span className="slider-text-color  ">{valence}</span>
            {sliderEnabled.valence && <button className={'btn btn-dark ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, valence: false}))}>Disable</button>}
            {!sliderEnabled.valence && <button className={'btn btn-secondary ms-2'} onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, valence: true}))}>Enable</button>}
            </label>
            </div>
            <div className="row">
                <input id="valence-range" className="form-range p-4" disabled={!sliderEnabled.valence} onChange={(e) => valenceUpdater(e.target.value)} type='range' min='0' max='100' value={valence}></input>
            </div>
        </div>
            <button className={'btn btn-dark br-0 ms-2 mt-2 me-2'} disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
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
            if (sliderEnabled.acousticness) {
                slider_map.acousticness = acousticness/100
            }
            if (sliderEnabled.danceability) {
                slider_map.danceability = danceability/100
            }
            if (sliderEnabled.duration) {
                slider_map.duration_ms = ((duration_ms) / 100) * (maxDuration - minDuration) + minDuration
                console.log('duration is' + slider_map.duration_ms)
            }
            if (sliderEnabled.tempo) {
                slider_map.tempo = ((tempo) / 100) * (maxTempo - minTempo) + minTempo 
            }
            if (sliderEnabled.energy) {
                slider_map.energy = energy/100
            }
            if (sliderEnabled.loudness) {
                slider_map.loudness = ((loudness) / 100) * 60 + -60
            }
            if (sliderEnabled.instrumentalness) {
                slider_map.instrumentalness = instrumentalness/100
            }
            if (sliderEnabled.liveness) {
                slider_map.liveness = liveness/100
            }
            if (sliderEnabled.speechiness) {
                slider_map.speechiness = speechiness/100
            }
            if (sliderEnabled.valence) {
                slider_map.valence = valence/100
            }
            promise = dispatcher(getTracksFromPlaylistThunk({id: currentPlaylist, sliders: slider_map}));
            }
        } >Update</button>
        </div>
    );
}
export default Sliders;