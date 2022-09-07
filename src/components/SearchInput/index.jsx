import React, { useContext } from "react";
import * as S from "./styles";
import { DataContext } from "../../context";
import { ReactComponent as ReactLogo } from "../../assets/icons/search.svg";

const SearchInput = ({ value, setValue, placeHolder, disabled }) => {
    const { darkMode } = useContext(DataContext);
    return (
        <S.ConteinerSpan darkMode={darkMode}>
            <S.SearchInput
                disabled={disabled}
                type={"text"}
                darkMode={darkMode}
                value={value}
                placeholder={placeHolder}
                onChange={({ target }) => setValue(target.value)}
            />
            <ReactLogo />
        </S.ConteinerSpan>
    );
};

export default SearchInput;
