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

    return (
        <div className="row align-items-center justify-content-center ms-3 mt-4 me-3">
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark "> 
                <div className="row text-center">
                <span class="form-check form-switch">
                    <label for="acousticness-range">
                        <span className="slider-text-color me-2 ">acousticness</span>
                        {sliderEnabled.acousticness && <span className="slider-text-color ">{sliders.acousticness}</span>}
                        <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, acousticness: !sliderEnabled.acousticness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.acousticness}/>
                    </label>
                </span>
                </div>
                <div className="row ">
                    {sliderEnabled.acousticness && <input id="acousticness-range" className="form-range p-4" disabled={!sliderEnabled.acousticness} onChange={(e) => dispatcher(updateSliders({...sliders, acousticness: e.target.value}))} type='range' min='0' max='100' value={sliders.acousticness}></input>}
                </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
                <span class="form-check form-switch">
                <label for="danceability-range">
                        <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, danceability: !sliderEnabled.danceability}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.danceability}/>
                        {sliderEnabled.danceability && <span className="slider-text-color me-2 ">danceability</span>}
                        <span className="slider-text-color ">{sliders.danceability}</span>
                </label>
                </span>
            </div>
            <div className="row ">
                {sliderEnabled.danceability && <input id="danceability-range" className="form-range p-4 " disabled={!sliderEnabled.danceability} onChange={(e) => dispatcher(updateSliders({...sliders, danceability: e.target.value}))} type='range' min='0' max='100' value={sliders.danceability}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
                <span class="form-check form-switch">
                <label for="duration-range">
                    <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, duration_ms: !sliderEnabled.duration_ms}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.duration_ms}/>
                    {sliderEnabled.duration_ms && <span className="slider-text-color me-2 ">duration</span>}
                    <span className="slider-text-color ">{sliders.duration_ms}</span>
                </label>
                </span>
            </div> 
            <div className="row ">
                {sliderEnabled.duration_ms && <input id="duration-range" className="form-range p-4 " disabled={!sliderEnabled.duration_ms}onChange={(e) => dispatcher(updateSliders({...sliders, duration_ms: e.target.value}))} type='range' min='0' max='100' value={sliders.duration_ms}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
                <span class="form-check form-switch">
                <label for="energy-range">
                {sliderEnabled.energy && <span className="slider-text-color me-2 ">energy</span>}
                    <span className="slider-text-color ">{sliders.energy}</span>
                    <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, energy: !sliderEnabled.energy}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.energy}/>
                </label>
                </span>
            </div>
            <div className="row ">
                {sliderEnabled.energy && <input id="energy-range" className="form-range p-4 d-block"disabled={!sliderEnabled.energy} onChange={(e) => dispatcher(updateSliders({...sliders, energy: e.target.value}))} type='range' min='0' max='100' value={sliders.energy}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="instrumental-range">
                {sliderEnabled.instrumentalness && <span className="slider-text-color me-2 ">instrumentalness</span>}
                <span className="slider-text-color ">{sliders.instrumentalness}</span>
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, instrumentalness: !sliderEnabled.instrumentalness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.instrumentalness}/>
            </label>
            </span>
            </div>
            <div className="row ">
                {sliderEnabled.instrumentalness && <input id="instrumental-range" className="form-range p-4 " disabled={!sliderEnabled.instrumentalness} onChange={(e) => dispatcher(updateSliders({...sliders, instrumentalness: e.target.value}))} type='range' min='0' max='100' value={sliders.instrumentalness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="liveness-range">
            {sliderEnabled.liveness && <span className="slider-text-color me-2 ">liveness</span>}
                <span className="slider-text-color ">{sliders.liveness}</span>
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, liveness: !sliderEnabled.liveness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.liveness}/>
            </label>
            </span>
            </div>
            <div className="row ">
                {sliderEnabled.liveness && <input  id="liveness-range" className="form-range p-4 " disabled={!sliderEnabled.liveness} onChange={(e) => dispatcher(updateSliders({...sliders, liveness: e.target.value}))} type='range' min='0' max='100' value={sliders.liveness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="loudness-range">
                {sliderEnabled.loudness && <span className="slider-text-color me-2 ">loudness</span>}
                <span className="slider-text-color ">{sliders.loudness}</span>
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, loudness: !sliderEnabled.loudness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.loudness}/>
            </label>
            </span>
            </div>
            <div className="row  ">
                {sliderEnabled.loudness && <input id="loudness-range" className="form-range p-4 " disabled={!sliderEnabled.loudness} onChange={(e) => dispatcher(updateSliders({...sliders, loudness: e.target.value}))} type='range' min='0' max='100' value={sliders.loudness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="speechiness-range">
            {sliderEnabled.speechiness && <span className="slider-text-color me-2 ">speechiness</span>}
                <span className="slider-text-color ">{sliders.speechiness}</span>
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, speechiness: !sliderEnabled.speechiness}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.speechiness}/>
            </label>
            </span>
            </div>
            <div className="row ">
                {sliderEnabled.speechiness && <input id="speechiness-range" className="form-range p-4 " disabled={!sliderEnabled.speechiness} onChange={(e) => dispatcher(updateSliders({...sliders, speechiness: e.target.value}))} type='range' min='0' max='100' value={sliders.speechiness}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark  justify-content-center ">
            <div className="row text-center">
            <span class="form-check form-switch">
            <label for="tempo-range">
            {sliderEnabled.tempo && <span className="slider-text-color me-2 ">tempo</span>}
                <span className="slider-text-color  ">{sliders.tempo}</span>
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, tempo: !sliderEnabled.tempo}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.tempo}/>
            </label>
            </span>
            </div>
            <div className="row ">
                {sliderEnabled.tempo && <input  id="tempo-range" className="form-range p-4 " disabled={!sliderEnabled.tempo} onChange={(e) => dispatcher(updateSliders({...sliders, tempo: e.target.value}))} type='range' min='0' max='100' value={sliders.tempo}></input>}
            </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 m-2 p-2 bg-dark   justify-content-center ">
           <div className="row text-center">
            <span class="form-check form-switch">
           <label for="valence-range">
           {sliderEnabled.valence && <span className="slider-text-color me-2 ">valence</span>}
                <span className="slider-text-color  ">{sliders.valence}</span>
                <input onClick={() => dispatcher(updateSliderEnabled({...sliderEnabled, valence: !sliderEnabled.valence}))}  class="form-check-input " type="checkbox" role="switch" checked={sliderEnabled.valence}/>
            </label>
            </span>
            </div>
            <div className="row">
                {sliderEnabled.valence && <input id="valence-range" className="form-range p-4" disabled={!sliderEnabled.valence} onChange={(e) => dispatcher(updateSliders({...sliders, valence: e.target.value}))} type='range' min='0' max='100' value={sliders.valence}></input>}
            </div>
        </div>
            <button className={'btn btn-dark br-0 ms-2 mt-2 me-2'} disabled={loadingMetrics || loadingSongs || currentPlaylist == -1} onClick={() => { 
            dispatcher(setLoadingSongs(true));
                // when we are calling this, make sure to only include the metrics that are enabled on the website
            let slider_map = {}
            if (sliderEnabled.acousticness) {
                slider_map.acousticness = sliders.acousticness/100
            }
            if (sliderEnabled.danceability) {
                slider_map.danceability = sliders.danceability/100
            }
            if (sliderEnabled.duration_ms) {
                slider_map.duration_ms = ((sliders.duration_ms) / 100) * (maxDuration - minDuration) + minDuration
                console.log('duration is' + slider_map.duration_ms)
            }
            if (sliderEnabled.tempo) {
                slider_map.tempo = ((sliders.tempo) / 100) * (maxTempo - minTempo) + minTempo 
            }
            if (sliderEnabled.energy) {
                slider_map.energy = sliders.energy/100
            }
            if (sliderEnabled.loudness) {
                slider_map.loudness = ((sliders.loudness) / 100) * 60 + -60
            }
            if (sliderEnabled.instrumentalness) {
                slider_map.instrumentalness = sliders.instrumentalness/100
            }
            if (sliderEnabled.liveness) {
                slider_map.liveness = sliders.liveness/100
            }
            if (sliderEnabled.speechiness) {
                slider_map.speechiness = sliders.speechiness/100
            }
            if (sliderEnabled.valence) {
                slider_map.valence = sliders.valence/100
            }
            promise = dispatcher(getTracksFromPlaylistThunk({id: currentPlaylist, sliders: slider_map}));
            }
        } >Update</button>
        </div>
    );
}
export default Sliders;