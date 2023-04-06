import { useState } from "react";
import "../style/style.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
const data = require('../res/villes.json');


const SearchCity = () => {

    const [value, setValue] = useState("");
    const navigate = useNavigate();

    //Fonction exécutée quand la valeur de l'input change
    const onChange = (event) => {
        setValue(event.target.value);
    };

    /* Fonction exécutée quand l'utilisateur clique sur un item de la liste déroulante
    la valeur sélectionnée est insérée dans l'input */
    const onSearch = (searchCityItem) => {
        setValue(searchCityItem);
    };

    /* Fonction exécutée quand l'utilisateur clique sur "chercher"
    On vérifie que l'input est rempli, on setValue la ville choisie (searchCityItem) par l'utilisateur
    et on navigue vers Meteocity avec le nom de la ville dans l'URL.
    Si le localstorage n'est pas vide (au moins une recherche) on l'incrémente avec la nouvelle ville choisie */
    const onsubmit = (searchCityItem) => {
        if (searchCityItem.length > 0) {
            setValue(searchCityItem.toLowerCase());
            if (localStorage.getItem("citysearch") != null) {
                localStorage.setItem("citysearch", localStorage.getItem("citysearch") + ", " + searchCityItem.toLowerCase());
            }
            else {
                localStorage.setItem("citysearch", searchCityItem.toLowerCase());
            }
            navigate("/meteocity/" + searchCityItem);
        }
    };

    return (
        <div className="search">
            <h1>Voir la météo d'une ville</h1>
            <p>(L'autocompletion est disponible uniquement pour les villes de France)</p>
            <div className="search-container">
                <div className="search-inner">
                    <TextField size="small" variant="outlined" color="success" label="Chercher une ville" value={value} onChange={onChange} />
                    <Button variant="outlined" color="success" onClick={() => onsubmit(value)}> Chercher </Button>
                </div>
                <div className="dropdown">
                    {/* Filtrage des données dans data avec les caractères de l'input */}
                    {data
                        .filter((item) => {
                            const searchCityItem = value.toLowerCase();
                            const fullName = item.nom_ville.toLowerCase();

                            return (
                                searchCityItem &&
                                fullName.startsWith(searchCityItem) &&
                                fullName !== searchCityItem
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
