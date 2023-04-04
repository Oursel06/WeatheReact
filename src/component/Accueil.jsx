import { Link } from "react-router-dom";

const Accueil = () => {

    const localStorageValue = localStorage.getItem("citysearch");

    return (
        <div className="accueil">
            <h2>Bienvenue sur WeatheReact !</h2>
            <i>L'application météo à amener partout avec vous !</i>
            {(localStorageValue != null) ?
                <div>
                    <p>Votre dernière recherche :</p>
                    <Link to={"/meteocity/" + localStorage.getItem("citysearch")}>
                        <li> {localStorage.getItem("citysearch")} </li>
                    </Link>
                </div>
                :
                <div></div>
            }
            <Link to="/searchcity/">
                <li>Faire une recherche </li>
            </Link>
        </div>
    );
};

export default Accueil;
