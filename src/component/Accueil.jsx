import { Link } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
    container: {
        padding: 2,
        backgroundColor: 'white',
        margin: 0,
        boxShadow: '8px 8px 0px purple',
        borderRadius: '10px',
    },

});

const Accueil = () => {

    const localStorageValue = localStorage.getItem("citysearch");
    const localStorageValueArr = (localStorageValue != null) ? localStorageValue.split(", ") : "";
    const localStorageValueArrUnique = (localStorageValueArr !== "") ? localStorageValueArr.filter((x, i) => localStorageValueArr.indexOf(x) === i) : "";
    const cityHistoryArrays = [];

    // On vérifie que le local storage contient au moins une ville pour insérer la / les ville(s) dans un tableau
    if (localStorage.getItem("citysearch") != null) {
        localStorageValueArrUnique.forEach((citySearchItem) => {
            cityHistoryArrays.push(
                <Link key={citySearchItem} to={"/meteocity/" + citySearchItem}>
                    <li>{citySearchItem}
                    </li>
                </Link>
            )
        })
    }

    return (
        <ThemeProvider theme={{ theme }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                "& h1": { color: 'white' },
            }} className="accueil">
                <h1>Bienvenue sur WeatheReact !</h1>
                <i>L'application météo à amener partout avec vous !</i>

                {/* Gestion de l'affichage de l'historique ou non */}
                <Box sx={{
                    width: '100vw',
                    height: '80vh',
                    padding: theme.container.padding,
                    boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    {(localStorageValueArr.length > 0) ?
                        <div>
                            <Box sx={{
                                padding: theme.container.padding,
                                border: theme.container.border,
                                backgroundColor: theme.container.backgroundColor,
                                boxShadow: theme.container.boxShadow,
                                borderRadius: theme.container.borderRadius,
                                width: '75vw',
                                height: '60vh',
                                overflow: 'auto',
                                "& p": {
                                    margin: theme.container.margin,
                                    height: '94%',
                                    overflowY: 'scroll'
                                },
                                "& .div": {
                                    fontSize: '1.5rem',
                                    width: '100%',
                                    height: '5%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'purple'
                                },
                                "& p li": {
                                    height: '60px',
                                    listStyleType: 'none',
                                    fontSize: '1.2rem',
                                    textTransform: 'capitalize',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'aliceblue',
                                    marginTop: '5px',
                                    borderRadius: theme.container.borderRadius,
                                }
                            }}>
                                <div class="div">Historique :</div>
                                <p>
                                    {cityHistoryArrays}
                                </p>
                            </Box>
                            <Box sx={{
                                "& li": {
                                    height: '10vh',
                                    boxSizing: 'border-box',
                                    marginTop: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: theme.container.borderRadius,
                                    backgroundColor: 'purple',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    boxShadow: '5px 5px 0px white',
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
                                <Link to="/searchcity/">
                                    <li> Chercher une ville </li>
                                </Link>
                            </Box>
                        </div>
                        :
                        <Box sx={{
                            "& li": {
                                height: '10vh',
                                boxSizing: 'border-box',
                                marginTop: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: theme.container.borderRadius,
                                backgroundColor: 'purple',
                                color: 'white',
                                fontSize: '1.5rem',
                                boxShadow: '5px 5px 0px white',
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
                            <p>Historique vide ! vous pouvez voir la météo d'une ville en <Link to="/searchcity/">
                                <li>cliquant ici </li>
                            </Link>
                            </p>
                        </Box>
                    }
                </Box>
            </Box >
        </ThemeProvider>
    );
};

export default Accueil;
