import { Link } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
    palette: {
      text:{
        primary:'red',
        secondary:'blue'
      }
    },
  });

const Accueil = () => {

    const localStorageValue = localStorage.getItem("citysearch");
    let localStorageValueArr = (localStorageValue != null) ? localStorageValue.split(", ") : "";
    let localStorageValueArrUnique = (localStorageValueArr !== "") ? localStorageValueArr.filter((x, i) => localStorageValueArr.indexOf(x) === i) : null;
    let cityHistoryArrays = [];


    if (localStorage.getItem("citysearch") != null) {
        localStorageValueArrUnique.forEach((citySearchItem) => {
            cityHistoryArrays.push(
                <Link key={citySearchItem} to={"/meteocity/" + citySearchItem}>
                    <li> {citySearchItem}
                    </li>
                </Link>
            )
        })
    }

    return (
        <ThemeProvider theme={{theme}}>
            <Box sx={{
                width:'100%',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
            }} className="accueil">
                <h2>Bienvenue sur WeatheReact !</h2>
                <i>L'application météo à amener partout avec vous !</i>

                {(localStorageValueArr.length > 0) ?
                    <div>
                        <Box  sx={{"& p":{color:theme.palette.text.primary}}}>
                            <p>Historique :
                                {cityHistoryArrays} 
                            </p>
                        </Box>
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
            </Box >
        </ThemeProvider>
    );
};

export default Accueil;
