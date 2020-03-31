import styled from 'styled-components';

const Select = styled.select`
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  padding: 0.75em;
  border: 1px solid lightgrey;
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  font-family: Sarabun;
  &:disabled {
    opacity: 0.4;
  }
`;

export default Select;