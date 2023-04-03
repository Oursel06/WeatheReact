import React, { useEffect, useState } from 'react';
import "../style/style.css";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Meteocity() {

    const { city } = useParams();
    const [citySelect, setCityItem] = useState([]);
    const [citySelectWeather, setCityWeatherItem] = useState([]);
    const [citySelectMain, setCityMainItem] = useState([]);
    const [citySelectWind, setCityWindItem] = useState([]);

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
    }, [])

    return (
        <div className="citycontent" >
            <div className='citymodal'>
                <h2>Ville : {citySelect}</h2>
                <i>Icon : {citySelectWeather.icon}</i>
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
