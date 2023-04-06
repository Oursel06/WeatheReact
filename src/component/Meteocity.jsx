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
import { Box } from '@mui/system';

function Meteocity() {

    const { city } = useParams();
    const [citySelect, setCityItem] = useState([]);
    const [citySelectWeather, setCityWeatherItem] = useState([]);
    const [citySelectMain, setCityMainItem] = useState([]);
    const [citySelectWind, setCityWindItem] = useState([]);

    /* Fonction exécutée pour récupérer les données de l'API openweathermap
    On stock les données dans différents tableaux pour les traiter dans le return() 
    CLE DISPO :
    ede1a0b17ea5ca8340e4b2a6e1cd5d77
    159bc8edfd02cf9d326776ae9269e0c8
    9300ddf4df026452021424b6a329efc0 */
    useEffect(() => {
        function fetchData() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9300ddf4df026452021424b6a329efc0&units=metric&lang=fr")
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
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            "& li": {
                height: '10vh',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                backgroundColor: 'purple',
                color: 'white',
                fontSize: '1.5rem',
                boxShadow: '5px 5px 0px white',
                width: '75vw',
                ":hover": {
                    backgroundColor: 'white',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 0px purple',
                    border: 'none',
                    color: 'purple'
                }
            },
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: 2,
                borderRadius: '10px',
                backgroundColor: 'white',
                boxShadow: '5px 5px 0px purple',
                width: '75vw',
                height: '60vh',
                "& h1": { color: 'Purple' },
                "& p": {
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '1.2rem',
                },
                "& p span": { fontWeight: 'bold' }
            }}>
                <h1>Ville : {citySelect}</h1>
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

                <p>Description : <span>{citySelectWeather.description}</span></p>
                <p>Température : <span>{citySelectMain.temp}°C</span></p>
                <p>Préssion : <span>{citySelectMain.pressure}hPa</span></p>
                <p>Humidité : <span>{citySelectMain.humidity}%</span></p>
                <p>Vitesse vent : <span>{citySelectWind.speed}Km/h</span></p>
            </Box>
            <Link to="/">
                <li>Retour </li>
            </Link>
        </Box>

    );
}

export default Meteocity;
