import { CSSProperties } from "styled-components";

export interface PageGradientSectionProps{
    children?:any;
    style?:CSSProperties;
    pageDivisor?:number;
    colors: string[];
}

export interface PageGradientSectionStyleProps{
    style: CSSProperties;
    pageDivisor:number;
    colors:string[];    
}