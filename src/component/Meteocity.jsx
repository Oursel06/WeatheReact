import React, { useEffect, useState } from 'react';
import "../style/style.css";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import soleil from '../res/soleil.png';
import pluie from '../res/pluie.png';
import nuageux from '../res/nuageux.png';
import neige from '../res/neige.png';
import couvert from '../res/couvert.png';
import brouillard from '../res/brouillard.png';
import loadimg from '../res/loadimg.png';

function Meteocity() {

    const { city } = useParams();
    const [citySelect, setCityItem] = useState([]);
    const [citySelectWeather, setCityWeatherItem] = useState([]);
    const [citySelectMain, setCityMainItem] = useState([]);
    const [citySelectWind, setCityWindItem] = useState([]);

    /* Fonction exécutée pour récupérer les données de l'API openweathermap
    On stock les données dans différents tableaux pour les traiter dans le return() */
    useEffect(() => {
        function fetchData() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=159bc8edfd02cf9d326776ae9269e0c8&units=metric&lang=fr")
                .then(res => res.json())
                .then(
                    (result) => {
                        setCityItem(result.name)
                        setCityWeatherItem(result.weather[0]);
                        setCityMainItem(result.main);
                        setCityWindItem(result.wind);
                    }
                )
        }
        fetchData()
    })

    return (
        <div className="citycontent" >
            <div className='citymodal'>
                <h2>Ville : {citySelect}</h2>
                {(citySelectWeather.icon === "01n") ?
                    <div>
                        <img width="100px" height="100px" src={soleil} alt='soleil' />
                    </div>
                    : (citySelectWeather.icon === "04n") ?
                        <div>
                            <img width="100px" height="100px" src={nuageux} alt='nuageux' />
                        </div>
                        : (citySelectWeather.icon === "02d") ?
                            <div>
                                <img width="100px" height="100px" src={couvert} alt='couvert' />
                            </div>
                            : (citySelectWeather.icon === "02n") ?
                                <div>
                                    <img width="100px" height="100px" src={couvert} alt='couvert' />
                                </div>
                                : (citySelectWeather.icon === "01d") ?
                                    <div>
                                        <img width="100px" height="100px" src={soleil} alt='soleil' />
                                    </div>
                                    : (citySelectWeather.icon === "10d") ?
                                        <div>
                                            <img width="100px" height="100px" src={pluie} alt='pluie' />
                                        </div>
                                        : (citySelectWeather.icon === "03d") ?
                                            <div>
                                                <img width="100px" height="100px" src={nuageux} alt='nuageux' />
                                            </div>
                                            : (citySelectWeather.icon === "03n") ?
                                                <div>
                                                    <img width="100px" height="100px" src={nuageux} alt='nuageux' />
                                                </div>
                                                : (citySelectWeather.icon === "04d") ?
                                                    <div>
                                                        <img width="100px" height="100px" src={nuageux} alt='nuageux' />
                                                    </div>
                                                    : (citySelectWeather.icon === "13n") ?
                                                        <div>
                                                            <img width="100px" height="100px" src={neige} alt='neige' />
                                                        </div>
                                                        : (citySelectWeather.icon === "50d") ?
                                                            <div>
                                                                <img width="100px" height="100px" src={brouillard} alt='brouillard' />
                                                            </div>
                                                            :
                                                            <img width="100px" height="100px" src={loadimg} alt='chargement' />
                }

                <p>Description : {citySelectWeather.description}</p>
                <p>Température : {citySelectMain.temp}°C</p>
                <p>Préssion : {citySelectMain.pressure}hPa</p>
                <p>Humidité : {citySelectMain.humidity}%</p>
                <p>Vitesse vent : {citySelectWind.speed}Km/h</p>
                <Link to="/searchcity">
                    <li>Retour </li>
                </Link>
            </div>
        </div>

    );
}

export default Meteocity;
