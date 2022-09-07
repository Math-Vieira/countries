import styled from "styled-components";
import myImgDark from "../../assets/icons/moon_dark.svg";
import myImgWhite from "../../assets/icons/moon_white.svg";

export const Header = styled.header`
    background-color: ${props => props.darkMode? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    color: hsl(200, 15%, 8%);
    box-shadow: ${props => props.darkMode? 'none' : '0px 1px 5px #888888'};
    transition: ease 0.3s;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
`;
export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    & a h1 {
        font-weight: 1000;
        font-size: 1.5rem;
        padding: 8px 0;
        color : ${props => props.darkMode ? 'white' :'color: hsl(200, 15%, 8%)'};
        transition: ease 0.3s;
        cursor: pointer;
    }

    & p {
        cursor: pointer;
        font-weight: 100;
        padding: 8px 0;
        display: flex;
        font-size: 1rem;
        align-items: center;
        gap: 3px;
        transition: ease 0.3s;
        color : ${props => props.darkMode ? 'white' :'color: hsl(200, 15%, 8%)'};
    }

    & p::before {
        content: "";
        display: inline-block;
        background-image: url(${props => props.darkMode ? myImgWhite :myImgDark});
        background-position: center center;
        background-size: cover;
        width: 16px;
        height: 16px;
        transition: ease 0.3s;
    }
`;
