import React from 'react';
import { SectionMain } from './PageSection.styles';
import { PageSectionProps } from './PageSection.types';

const PageSection = (props: PageSectionProps) => {
  const { children, style = {}, pageDivisor = 1 } = props;
  return (
    <SectionMain pageDivisor={pageDivisor} style={style}>
      {children}
    </SectionMain>
  );
};

export default PageSection;
