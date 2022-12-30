import React from 'react';
import { MainBox } from './FlexibleBox.styles';
import { FlexibleBoxProps } from './FlexibleBox.types';

const FlexibleBox = (props: FlexibleBoxProps) => {
  const { children } = props;
  return <MainBox>{children}</MainBox>;
};

export default FlexibleBox;
