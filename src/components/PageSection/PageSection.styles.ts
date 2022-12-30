import styled from "styled-components";
import { PageSectionStyleProps } from "./PageSection.types";

export const SectionMain = styled.div`
    height: ${(props:PageSectionStyleProps)=>100 / props.pageDivisor +"vh"};
    width: 100vw;
    overflow-y: auto;
    overflow-x: auto;
    ${(props:PageSectionStyleProps)=>({...props.style})}
`;