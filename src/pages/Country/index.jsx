import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context";
import Error from "../../components/Error";
import * as C from "./styles";
import LoadingElement from "../../components/LoadingElement";
import CountryInfoCard from "../../components/CountryInfoCard";
import Head from "../../helper/Head";

const Country = () => {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(null);
    const { darkMode } = useContext(DataContext);
    const [error, setError] = useState(null);
    const { code } = useParams();
    const api = "https://restcountries.com/v3.1/alpha/";

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        async function fetchCountry(api) {
            try {
                setLoading(true);
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(
                        "An error has occurred, please reload the page."
                    );
                }
                const json = await response.json();
                setCountry(json[0]);
            } catch (err) {
                setError("An error has occurred, please reload the page.");
            } finally {
                setLoading(false);
            }
        }
        fetchCountry(api + code);
    }, [code]);

    return (
        <>
            <Head title={`Countries | ${country ? country.name.common: '...'}`} />
            <C.Main darkMode={darkMode}>
                <C.ContentConteiner className="centralizer">
                    {loading ? (
                        <LoadingElement />
                    ) : error ? (
                        <Error error={error} />
                    ) : country ? (
                        <CountryInfoCard
                            nativeName={country.name.official}
                            background={country.flags.svg}
                            countryName={country.name.common}
                            population={country.population}
                            region={country.region}
                            subregion={country.subregion}
                            capital={
                                country.capital ? country.capital[0] : "Unknow"
                            }
                            tld={country.tld ? country.tld[0] : "Unknow"}
                            currencies={
                                country.currencies
                                    ? country.currencies
                                    : "Unknow"
                            }
                            languages={
                                country.languages
                                    ? Object.values(country.languages).join(
                                          ", "
                                      )
                                    : "Unknow"
                            }
                            borders={country.borders ? country.borders : ""}
                        />
                    ) : (
                        ""
                    )}
                </C.ContentConteiner>
            </C.Main>
        </>
    );
};

export default Country;
