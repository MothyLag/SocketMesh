import React from "react";
import { Container, WeavyBackgroundStyle } from "./WeavyBackground.styles";
import { WeavyBackgroundProps } from "./WeavyBackground.types";

const WeavyBackground = (props:WeavyBackgroundProps)=>{
    const {children} = props;
    return <Container>
        <WeavyBackgroundStyle>{children}</WeavyBackgroundStyle>
    </Container>
}

export default WeavyBackground;