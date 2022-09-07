import React, { useContext } from "react";
import { DataContext } from "../../context";
import * as C from "./styles";

const CountryCard = ({ background, name, population, region, capital }) => {
    const { darkMode } = useContext(DataContext);
    return (
        <C.CountryCard darkMode={darkMode} className="animeBottom">
            <C.Flag background={background} darkMode={darkMode}></C.Flag>
            <C.Info darkMode={darkMode}>
                <h4>{name}</h4>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </C.Info>
        </C.CountryCard>
    );
};

export default CountryCard;
