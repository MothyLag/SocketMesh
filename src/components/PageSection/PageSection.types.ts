import { CSSProperties } from "styled-components";

export interface PageSectionProps{
    children?:any;
    style?:CSSProperties;
    pageDivisor?:number;
}

export interface PageSectionStyleProps{
    style: CSSProperties;
    pageDivisor:number;    
}