import React, { useContext } from "react";
import * as H from "./styles";
import { DataContext } from "../../context";

const Header = () => {
    const { darkMode, setDarkMode } = useContext(DataContext);

    return (
        <H.Header darkMode={darkMode}>
            <H.HeaderContent darkMode={darkMode} className="centralizer">
                <h1>Where in the world?</h1>
                <p onClick={() => setDarkMode(!darkMode)}>DarkMode</p>
            </H.HeaderContent>
        </H.Header>
    );
};

export default Header;
