import styled from "styled-components";

export const CountryCard = styled.div`
    height: 300px;
    background-color: ${(props) =>
        props.darkMode ? "hsl(209, 23%, 22%)" : "white"};
    border-radius: 5px;
    overflow: hidden;
    box-shadow: ${(props) =>
        props.darkMode ? "" : "0px 0px 4px hsl(0, 0%, 52%)"};
    transition: ease 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;
export const Flag = styled.div`
    height: 50%;
    background-color: blue;
    background: url(${props => props.background});
    background-size: cover;
    background-position: center center;
    box-shadow: ${(props) =>
        props.darkMode ? "" : "0px 0px 4px hsl(0, 0%, 52%)"};
`;

export const Info = styled.div`
    height: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: ease 0.3s;
    color: ${(props) =>
        props.darkMode ? "white" : "hsl(209, 23%, 22%)"};;
    & h4 {
        margin-bottom: 5px;
    }
`;
