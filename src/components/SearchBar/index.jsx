import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context";
import SearchInput from "../SearchInput";
import Select from "../Select";
import * as S from "./styles";

const SearchBar = ({ setCountriesFiltered, countries, loading }) => {
    const [filterByString, setFilterByString] = useState("");
    const [filterByRegion, setFilterByRegion] = useState(-1);
    const { regions } = useContext(DataContext);

    //filter using input text and select
    useEffect(() => {
        if (filterByString !== "" && +filterByRegion !== -1) {
            setCountriesFiltered(() =>
                countries.filter((p) => {
                    const firstCondition = p.name.common
                        .toLowerCase()
                        .includes(filterByString.toLowerCase());
                    const lastCondition = p.region
                        .toLowerCase()
                        .includes(filterByRegion.toLowerCase());
                    return firstCondition && lastCondition;
                })
            );
        } else if (filterByString === "" && +filterByRegion !== -1) {
            setCountriesFiltered(() =>
                countries.filter((e) =>
                    e.region
                        .toLowerCase()
                        .includes(filterByRegion.toLowerCase())
                )
            );
        } else if (filterByString !== "" && +filterByRegion === -1) {
            setCountriesFiltered(() =>
                countries.filter((p) =>
                    p.name.common
                        .toLowerCase()
                        .includes(filterByString.toLowerCase())
                )
            );
        } else {
            setCountriesFiltered(countries);
        }
    }, [filterByString, filterByRegion]);

    return (
        <S.SearchBar>
            <SearchInput
                placeHolder={"Search for a country..."}
                value={filterByString}
                setValue={setFilterByString}
                disabled = {loading ? true : false}
            />
            <Select
                waitingMessage={"Wait for the list..."}
                value={filterByRegion}
                setValue={setFilterByRegion}
                listOptions={regions}
                firstOption={"Filter by region"}
            />
        </S.SearchBar>
    );
};

export default SearchBar;
