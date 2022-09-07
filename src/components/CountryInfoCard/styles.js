import styled from "styled-components";

export const MainConteiner = styled.div`
    width: 100%;
    min-height: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    color: ${(props) =>
        props.darkMode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"};
    transition: ease 0.3s;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        margin-top: 30px;
    }
`;

export const Flag = styled.div`
    height: 100%;
    background: url(${(props) => props.background});
    background-size: cover;
    background-position: center center;
    box-shadow: ${(props) => (props.darkMode ? "none" : "0px 1px 5px #888888")};
    @media (max-width: 900px) {
        min-height: 300px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: 50px;
    }
`;

export const InfoContent = styled.main`
    padding: 20px 0;
    & h4 {
        font-weight: 4000;
        font-size: 30px;
        margin-bottom: 23px;
    }
`;

export const DataList = styled.div`
    display: flex;
    justify-content: space-between;

    & li {
        margin: 10px 0;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: left;
        gap: 25px;
    }
`;

export const BorderCountriesList = styled.div`
    margin-top: 10px;
    @media (max-width: 900px) {
        & .span_block {
            display: block;
        }
    }
`;

export const BordersButton = styled.button`
    border-radius: 4px;
    padding: 3px 3px;
    border: none;
    outline: none;
    margin: 5px 10px;
    color: ${(props) => (props.darkMode ? "white" : "hsl(209, 23%, 22%)")};
    box-shadow: ${(props) =>
        props.darkMode ? "" : "1px 1px 3px hsl(0, 0%, 52%)"};
    background-color: ${(props) =>
        props.darkMode ? "hsl(209, 23%, 22%)" : "white"};
    min-width: 50px;
    transition: ease 0.3s;
    cursor: pointer;
`;

export const BackButton = styled.button`
    border-radius: 4px;
    padding: 10px 20px;
    border: none;
    outline: none;
    margin-bottom: 20px;
    color: ${(props) => (props.darkMode ? "white" : "hsl(209, 23%, 22%)")};
    box-shadow: ${(props) =>
        props.darkMode ? "" : "1px 1px 3px hsl(0, 0%, 52%)"};
    background-color: ${(props) =>
        props.darkMode ? "hsl(209, 23%, 22%)" : "white"};
    min-width: 50px;
    transition: ease 0.3s;
    cursor: pointer;
    min-width: 150px;
    font-weight: bolder;
    top: -100px;
    left: -10px;
    @media (max-width: 900px) {
        top: -15px;
    }
`;
