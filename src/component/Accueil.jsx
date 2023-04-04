import { Link } from "react-router-dom";

const Accueil = () => {

    const localStorageValue = localStorage.getItem("citysearch");
    var localStorageValueArr = localStorageValue.split(", ");
    var cityHistoryArrays = [];

    if (localStorage.getItem("citysearch") != null) {
        localStorageValueArr.forEach((citySearchItem) => {
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
                    <p>Votre dernière recherche :</p>
                    {cityHistoryArrays}
                </div>
                :
                <div>Historique vide vous pouvez voir la météo d'une ville en France en <Link to="/searchcity/">
                    <li>cliquant ici </li>
                </Link>
                </div>
            }
            <Link to="/searchcity/">
                <li> Chercher une ville </li>
            </Link>
        </div>
    );
};

export default Accueil;
