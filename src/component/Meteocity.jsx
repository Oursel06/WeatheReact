import React, { useEffect, useState } from 'react';

function Meteocity(props) {

    const [citySelect, setCityItem] = useState([]);
    const [promise, promiseok] = useState(true);

    useEffect(() => {
        async function fetchData() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + props.name + "&appid=159bc8edfd02cf9d326776ae9269e0c8&units=metric&lang=fr")
                .then(res => res.json())
                .then(
                    (result) => {
                        promiseok(false)
                        setCityItem(result)
                    }
                )
        }
        fetchData()
    }, [])

    return (
        <div className="citycontent" >
            {(!promise) ?
                <div>
                    <h2>Ville : {props.name}</h2>
                    <i>Icon : {citySelect.weather[0].icon}</i>
                    <p>Description : {citySelect.weather[0].description}</p>
                    <p>Température : {citySelect.main.temp}°C</p>
                    <p>Préssion : {citySelect.main.pressure}hPa</p>
                    <p>Humidité : {citySelect.main.humidity}%</p>
                    <p>Vitesse vent : {citySelect.wind.speed}Km/h</p>
                </div>
                :
                <p>Chargement...</p>
            }
        </div>
    );
}

export default Meteocity;
