import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.darkMode? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
    color : ${props => props.darkMode ? 'white' :'color: hsl(200, 15%, 8%)'};
    transition: ease 0.3s;
    font-weight: bolder;
    padding: 20px 0;
    box-shadow: ${props => props.darkMode? 'none' : '0px -1px 5px #888888'};
`