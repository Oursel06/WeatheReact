import { useState } from "react";
import "../style/style.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Box } from '@mui/system';
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
        <Box sx={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                "& h1": { color: 'white' },
                "& p": { margin: '0', fontStyle: 'italic' }
            }}>
                <h1>Voir la météo d'une ville</h1>
                <p>(L'autocompletion est disponible uniquement pour les villes de France)</p>
            </Box>
            <div className="search-container">
                <Box >
                    <TextField sx={{
                        width: '50vw',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        border: 'none',
                        "& label": { color: 'black', backgroundColor: 'white' },
                        "& fieldset legend > span": { padding: '0' }
                    }} color="secondary" variant="outlined" label="Chercher une ville" value={value} onChange={onChange} />
                    <Button sx={{
                        backgroundColor: 'purple',
                        boxSizing: 'border-box',
                        borderRadius: '10px',
                        color: 'white',
                        fontSize: '1rem',
                        boxShadow: '5px 5px 0px white',
                        textTransform: 'capitalize',
                        border: 'none',
                        transform: 'translateY(3px)',
                        ":hover": {
                            backgroundColor: 'white',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            boxShadow: '5px 5px 0px purple',
                            textTransform: 'capitalize',
                            border: 'none',
                            color: 'purple'
                        }
                    }} variant="outlined" size="large" onClick={() => onsubmit(value)}> Chercher </Button>
                </Box>
                <Box sx={{
                    padding: 2
                }}>
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
                </Box>
            </div>
            <Box sx={{ color: 'red', fontSize: '1.5rem', display: 'flex', textAlign: 'center' }}>
                <i>ATTENTION : Certaines données peuvent être inexactes</i>
            </Box>
            <Box sx={{
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
                <Link to="/">
                    <li>Retour </li>
                </Link>
            </Box>
        </Box >
    );
};

export default SearchCity;
