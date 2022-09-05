import React, { useContext } from "react";
import * as F from "./styles";
import { DataContext } from "../../context";

const Footer = () => {
    const {darkMode} = useContext(DataContext)

    return (
        <F.Footer darkMode={darkMode}>
            Countries - Matheus Vieira - 2022
        </F.Footer>
    );
};

export default Footer;
