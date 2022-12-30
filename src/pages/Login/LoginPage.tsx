import React from 'react';
import FlexibleBox from '../../components/FlexibleBox/FlexibleBox';
import PageSection from '../../components/PageSection/PageSection';
import { LoginLayout, PresentationSectionStyle } from './Login.styles';

const LoginPage = () => {
  return (
    <LoginLayout>
      <PageSection pageDivisor={2} style={PresentationSectionStyle}>
        <FlexibleBox>asd</FlexibleBox>
      </PageSection>
    </LoginLayout>
  );
};

export default LoginPage;
