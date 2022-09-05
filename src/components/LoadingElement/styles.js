import styled, { keyframes } from "styled-components";

const spin = keyframes`
     0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: ${spin} 2s linear infinite; /* Safari */
    animation: ${spin} 2s linear infinite;
`;
