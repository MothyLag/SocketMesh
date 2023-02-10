import React from 'react';
import FlexibleBox from '../../components/FlexibleBox/FlexibleBox';
import PageGradientSection from '../../components/PageGradientSection/PageGradientSection';
import PageSection from '../../components/PageSection/PageSection';
import { TitleText } from '../../components/TitleText';
import { LoginLayout, PresentationSectionStyle } from './Login.styles';

const LoginPage = () => {
  return (
    <LoginLayout>
      <PageGradientSection
        colors={['red', 'blue', 'yellow', 'orange']}
        pageDivisor={2}
        style={PresentationSectionStyle}
      >
        <FlexibleBox>
          <TitleText>asd</TitleText>
        </FlexibleBox>
      </PageGradientSection>
      <PageSection pageDivisor={2} style={PresentationSectionStyle}>
        <FlexibleBox>
          <TitleText>paginita</TitleText>
          <p>es muuy flexible señor</p>
        </FlexibleBox>
      </PageSection>
    </LoginLayout>
  );
};

export default LoginPage;
