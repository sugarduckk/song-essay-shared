import styled from 'styled-components';

const RadioOption = styled.label`
  text-align: center;
  flex: 1;
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  background: ${props => props.checked ? props.theme.Color.Primary : 'white'};
  border: 1px solid ${props => props.theme.Color.Primary};
  color: ${props => props.checked ? 'white' : props.theme.Color.Primary};
  padding: 0.75em;
  cursor: pointer;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
`;

export default RadioOption;