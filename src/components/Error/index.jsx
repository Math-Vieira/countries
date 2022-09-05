import React from "react";
import * as E from "./styles";

const Error = ({ error }) => {
    return (
        <E.ErrorConteiner className="animeBottom">
            <E.Error>{error}</E.Error>
        </E.ErrorConteiner>
    );
};

export default Error;
