import React from 'react';
import styled from 'styled-components';

const DividerWithTextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  color: grey;
  &:before, :after {
    content: '';
    flex: 1;
    border-bottom: 1px solid grey;
  }
  &:before {
    margin-right: .3em;
  }
  &:after {
    margin-left: .3em;
  }
`;

const DividerWithText = props => {
  return <DividerWithTextContainer>
    {props.text}
  </DividerWithTextContainer>;
};

export default DividerWithText;