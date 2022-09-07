import React, { useContext, useState, useEffect } from "react";
import * as H from "./styles";
import { DataContext } from "../../context";
import SearchBar from "../../components/SearchBar";
import CountryCard from "../../components/CountryCard";
import LoadingElement from "../../components/LoadingElement";
import Error from "../../components/Error";
import { NavLink } from "react-router-dom";
import Head from "../../helper/Head";

const Home = () => {
    const { darkMode, countries, loading, error } = useContext(DataContext);
    const [countriesFiltered, setCountriesFiltered] = useState(null);

    const showedCountries = countriesFiltered ? countriesFiltered : countries;

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
            <Head title = {'Countries | Home'}/>
            <H.Main darkMode={darkMode}>
                <div className="centralizer">
                    <SearchBar
                        loading={loading}
                        countries={countries}
                        setCountriesFiltered={setCountriesFiltered}
                    />
                    {loading ? (
                        <LoadingElement />
                    ) : error ? (
                        <Error error={error} />
                    ) : countries ? (
                        <H.CardConteiner>
                            {showedCountries
                                .sort((a, b) => {
                                    if (a.name.common < b.name.common)
                                        return -1;
                                    if (a.name.common > b.name.common) return 1;
                                    return 0;
                                })
                                .map((e) => (
                                    <NavLink
                                        to={`/country/${e.cca2}`}
                                        key={e.name.common}
                                    >
                                        <CountryCard
                                            name={e.name.common}
                                            background={e.flags.svg}
                                            population={e.population}
                                            region={e.region}
                                            capital={
                                                e.capital
                                                    ? e.capital[0]
                                                    : "Unknow"
                                            }
                                        />
                                    </NavLink>
                                ))}
                        </H.CardConteiner>
                    ) : (
                        ""
                    )}
                </div>
            </H.Main>
        </>
    );
};

export default Home;
