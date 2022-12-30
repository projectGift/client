import styled from '@emotion/styled';
import React from 'react';

interface Props {
  keyword: string;
  text: string;
}

const Headline = ({ keyword, text }: Props) => {
  return (
    <StHeadline>
      <StText>
        <StKeyword>{keyword}</StKeyword> {text}
      </StText>
    </StHeadline>
  );
};

const StHeadline = styled.div`
  width: 100%;
`;

const StText = styled.p`
  font-size: 20px;
`;

const StKeyword = styled.span`
  color: red;
  font-size: 20px;
  font-weight: 600;
`;

export default Headline;
