import styled,{keyframes} from "styled-components";
import { PageGradientSectionStyleProps } from "./PageGradientSection.types";

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const SectionMain = styled.div`
    height: ${(props:PageGradientSectionStyleProps)=>100 / props.pageDivisor +"vh"};
    width: 100vw;
    overflow-y: auto;
    overflow-x: auto;
    background: linear-gradient(-45deg, ${(props:PageGradientSectionStyleProps)=>props.colors.join()});
	background-size: ${(props:PageGradientSectionStyleProps)=>props.colors.length * 100}% ${(props:PageGradientSectionStyleProps)=>props.colors.length * 100}%;
	animation: ${gradientAnimation} 25s ease infinite; 
    ${(props:PageGradientSectionStyleProps)=>({...props.style})}
`;

