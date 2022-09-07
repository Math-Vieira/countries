import styled from "styled-components";

export const Main = styled.main`
    background-color: ${(props) =>
        props.darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
    min-height: 100vh;
    transition: ease 0.3s;
`;

export const ContentConteiner = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    } */
`;
