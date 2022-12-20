import styled, { keyframes } from "styled-components"
const DiagonalTranslateBckgAnimation = keyframes`
    0% {background-position: 0% 0%;}
    50% {background-position: 50% 50%;}
    90% {background-position: 75% 75%;}
    100%{background-position: 100% 100%;}
`;

export const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

export const WeavyBackgroundStyle =styled.div`
    height: 100vh;
    width: 100vw;
    background:linear-gradient(-45deg,black,#2C32CA,#EB4F4F,black);
    background-size: 4000% 4000%;
    animation: ${DiagonalTranslateBckgAnimation} 10s ease infinite;
`
