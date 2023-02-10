import React from 'react';
import { SectionMain } from './PageGradientSection.styles';
import { PageGradientSectionProps } from './PageGradientSection.types';

const PageGradientSection = (props: PageGradientSectionProps) => {
  const { children, style = {}, pageDivisor = 1, colors } = props;
  return (
    <SectionMain colors={colors} pageDivisor={pageDivisor} style={style}>
      {children}
    </SectionMain>
  );
};

export default PageGradientSection;
