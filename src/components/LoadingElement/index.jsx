import React from "react";
import * as L from "./styles";

const LoadingElement = () => {
    return (
        <L.Loading className="animeBottom">
            <L.Loader />
        </L.Loading>
    );
};

export default LoadingElement;
