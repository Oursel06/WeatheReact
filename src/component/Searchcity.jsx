import { useState } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
const data = require('../res/villes.json');

const SearchCity = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };

    const onsubmit = (searchTerm) => {
        setValue(searchTerm.toLowerCase());
        if (localStorage.getItem("citysearch") != null) {
            localStorage.setItem("citysearch", localStorage.getItem("citysearch") + ", " + searchTerm.toLowerCase());
        }
        else {
            localStorage.setItem("citysearch", searchTerm.toLowerCase());
        }
    };

    return (
        <div className="search">
            <h1>Voir la météo d'une ville</h1>
            <p>(L'autocompletion est disponible uniquement pour les villes de France)</p>

            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    <Link to={"/meteocity/" + value}>
                        <button onClick={() => onsubmit(value)}> Chercher </button>
                    </Link>

                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.nom_ville.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.nom_ville)}
                                className="dropdown-row"
                                key={item.nom_ville}>
                                {item.nom_ville}
                            </div>
                        ))}
                </div>
            </div>
            <i className="warning">ATTENTION : Certaines données peuvent être inexactes</i>

            <Link to="/">
                <li>Retour </li>
            </Link>
        </div >
    );
};

export default SearchCity;
