import styled from "styled-components";

export const SearchInput = styled.input`
    width: 300px;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: ${(props) =>
        props.darkMode ? "" : "1px 1px 3px hsl(0, 0%, 52%)"};
    background-color: ${(props) =>
        props.darkMode ? "hsl(209, 23%, 22%)" : "white"};
    color: ${(props) => (props.darkMode ? "white" : "hsl(209, 23%, 22%)")};
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 2em;
    transition: ease 0.3s;
    caret-color: ${(props) => (props.darkMode ? "white" : "black")};
    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const ConteinerSpan = styled.span`
    position: relative;

    & svg {
        height: 16px;
        width: 16px;
        position: absolute;
        left: 10px;
        top: 13px;
        fill: ${(props) => (props.darkMode ? "white" : "black")};
        transition: ease 0.3s;
    }
    @media (max-width: 800px) {
        width: 100%;
        display: block;
    }
`;
