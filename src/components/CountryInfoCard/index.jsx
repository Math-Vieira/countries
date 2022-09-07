import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context";
import ListItem from "../ListItem";
import * as C from "./styles";
import { setBorders } from "../../functions/setBorders";

const CountryInfoCard = ({
    countryName,
    background,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
}) => {
    const [bordersCountries, setBordersCountries] = useState("");
    const navigate = useNavigate();
    const { darkMode } = useContext(DataContext);
    const currenciesKeys =
        typeof currencies === "object" ? Object.keys(currencies) : "Unknow";
    const currenciesString =
        typeof currenciesKeys === "string"
            ? currenciesKeys
            : currencies[currenciesKeys[0]]["name"];

    useEffect(() => {
        async function setBordersArray() {
            if (borders.length) {
                const listOfBorders = await setBorders(borders);
                setBordersCountries(listOfBorders);
            }
        }
        setBordersArray();
    }, []);

    return (
        <div style={{width:'100%'}}>
            {" "}
            <C.BackButton
                className="animeBottom"
                onClick={() => navigate(-1)}
                darkMode={darkMode}
            >
                Back
            </C.BackButton>
            <C.MainConteiner darkMode={darkMode} className="animeBottom">
                <C.Flag darkMode={darkMode} background={background} />
                <C.InfoContent>
                    <h4>{countryName}</h4>
                    <C.DataList>
                        <ul>
                            <ListItem
                                listItem={"Native name"}
                                value={nativeName}
                            />
                            <ListItem
                                listItem={"Population"}
                                value={population}
                            />
                            <ListItem listItem={"Region"} value={region} />
                            <ListItem
                                listItem={"Sub Region"}
                                value={subregion}
                            />
                            <ListItem listItem={"Capital"} value={capital} />
                        </ul>
                        <ul>
                            <ListItem
                                listItem={"Top Level Domain"}
                                value={tld}
                            />
                            <ListItem
                                listItem={"Currencies"}
                                value={currenciesString}
                            />
                            <ListItem
                                listItem={"Languages"}
                                value={languages}
                            />
                        </ul>
                    </C.DataList>
                    <C.BorderCountriesList>
                        <span>
                            <b>
                                <span className="span_block">
                                    Border Countries:{" "}
                                </span>
                                {bordersCountries.length
                                    ? bordersCountries.map((e, i) => (
                                          <C.BordersButton
                                              onClick={() =>
                                                  navigate(
                                                      `/country/${borders[i]}`
                                                  )
                                              }
                                              key={i}
                                              darkMode={darkMode}
                                          >
                                              {e}
                                          </C.BordersButton>
                                      ))
                                    : "Unknow"}
                            </b>
                        </span>
                    </C.BorderCountriesList>
                </C.InfoContent>
            </C.MainConteiner>
        </div>
    );
};

export default CountryInfoCard;
