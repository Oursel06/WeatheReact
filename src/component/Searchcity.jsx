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
        <Link to='/meteocity' />
        setValue(searchTerm);
        if (localStorage.getItem("citysearch") != null) {
            localStorage.setItem("citysearch", localStorage.getItem("citysearch") + ", " + searchTerm);
        }
        else {
            localStorage.setItem("citysearch", searchTerm);
        }
    };

    return (
        <div className="search">
            <h1>Recherchez une ville de France</h1>

            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    <Link to={"/meteocity/" + value}>
                        <button onClick={() => onSearch(value)}> Chercher </button>
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
            <Link to="/">
                <li>Retour </li>
            </Link>
        </div >
    );
};

export default SearchCity;
