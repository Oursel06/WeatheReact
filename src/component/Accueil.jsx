import { Link } from "react-router-dom";

const Accueil = () => {

    const localStorageValue = localStorage.getItem("citysearch");
    const localStorageValueArr = (localStorageValue != null) ? localStorageValue.split(", ") : "";
    const localStorageValueArrUnique = (localStorageValueArr !== "") ? localStorageValueArr.filter((x, i) => localStorageValueArr.indexOf(x) === i) : "";
    const cityHistoryArrays = [];

    if (localStorage.getItem("citysearch") != null) {
        localStorageValueArrUnique.forEach((citySearchItem) => {
            cityHistoryArrays.push(
                <Link to={"/meteocity/" + citySearchItem}>
                    <li> {citySearchItem} </li>
                </Link>
            )
        })
    }

    return (
        <div className="accueil">
            <h2>Bienvenue sur WeatheReact !</h2>
            <i>L'application météo à amener partout avec vous !</i>

            {(localStorageValueArr.length > 0) ?
                <div>
                    <p>Historique :
                        {cityHistoryArrays} </p>
                    <p>
                        <Link to="/searchcity/">
                            <li> Chercher une ville </li>
                        </Link>
                    </p>
                </div>
                :
                <p>Historique vide ! vous pouvez voir la météo d'une ville en France en <Link to="/searchcity/">
                    <li>cliquant ici </li>
                </Link>
                </p>
            }
        </div >
    );
};

export default Accueil;
