import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [countries, setCountries] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [regions, setRegions] = useState(null);

    useEffect(() => {
        async function fetchData(api) {
            try {
                setLoading(true);
                const response = await fetch(api);
                if (!response.ok)
                    throw new Error(
                        "An error has occurred, please reload the page."
                    );
                const json = await response.json();

                setRegions([...new Set(json.map((e) => e.region))]);
                console.log(json);
                setCountries(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData("https://restcountries.com/v3.1/all");
    }, []);

    return (
        <DataContext.Provider
            value={{
                darkMode,
                setDarkMode,
                countries,
                error,
                loading,
                regions,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default Context;
