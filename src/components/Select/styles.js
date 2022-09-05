import styled from "styled-components";

export const Select = styled.select`
    box-shadow: ${props => props.darkMode ? '' : '1px 1px 3px hsl(0, 0%, 52%)'};
    background-color: ${props => props.darkMode ? 'hsl(209, 23%, 22%)' : 'white'};
    color: ${props => props.darkMode ? 'white': 'hsl(209, 23%, 22%)'};
    padding: 6px 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    z-index: 2;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
    min-width: 150px;
    background-image: linear-gradient(45deg, transparent 50%, ${props => props.darkMode ? 'white' : 'hsl(209, 23%, 22%)' } 50%),
        linear-gradient(135deg, ${props => props.darkMode ? 'white' : 'hsl(209, 23%, 22%)' } 50%, transparent 50%),
        radial-gradient(${props => props.darkMode ? '#222': '#ddd'} 70%, transparent 72%);
    background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    transition: ease 0.3s;
`;
