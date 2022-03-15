import React from 'react';
import { TitleSpan, TitleContainer } from './styles';

function Title({title}) {
  return (
    <TitleContainer>
      <TitleSpan>{title}</TitleSpan>
    </TitleContainer>
  );
}

export default Title;
