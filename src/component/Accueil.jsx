import { Link } from "react-router-dom";

const Accueil = () => {

    const localStorageCity = "nice";

    return (
        <div className="accueil">
            <h2>Bienvenue sur WeatheReact !</h2>
            <i>L'application météo à amener partout avec vous !</i>
            <p>Vos récentes recherches :</p>
            <Link to={"/meteocity/" + localStorageCity}>
                <li>Nice </li>
            </Link>
            <Link to="/searchcity/">
                <li>Faire une recherche </li>
            </Link>
        </div>
    );
};

export default Accueil;
