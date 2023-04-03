import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Meteocity() {

    const { city } = useParams();
    const [citySelect, setCityItem] = useState([]);
    const [promise, promiseok] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // " + props.name + "
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=159bc8edfd02cf9d326776ae9269e0c8&units=metric&lang=fr")
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
                    <h2>Ville : {citySelect.name}</h2>
                    <p>base : {citySelect.base}</p>
                    <p>base : {citySelect.visibility}</p>
                    {/* <i>Icon : {citySelect.weather[0].icon}</i> */}
                    {/* <p>Description : {citySelect.weather[0].description}</p> */}
                    {/* <p>Température : {citySelect.main.temp}°C</p> */}
                    {/* <p>Préssion : {citySelect.main.pressure}hPa</p> */}
                    {/* <p>Humidité : {citySelect.main.humidity}%</p> */}
                    {/* <p>Vitesse vent : {citySelect.wind.speed}Km/h</p> */}
                </div>
                :
                <p>Chargement...</p>
            }
        </div>
    );
}

export default Meteocity;
