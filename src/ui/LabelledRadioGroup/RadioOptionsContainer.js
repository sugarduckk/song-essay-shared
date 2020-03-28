import styled from 'styled-components';

const RadioOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.Dim.phoneWidth}px) {
    flex-direction: row;
  }
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  padding: 0.75em;
  border: 1px solid lightgrey;
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
`;

export default RadioOptionsContainer;