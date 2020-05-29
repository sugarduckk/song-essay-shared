import styled from 'styled-components';

const Label = styled.label`
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  font-family: ${props => props.theme.Font.Primary};
`;

export default Label;