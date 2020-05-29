import styled from 'styled-components';

const FormItemErrorMessage = styled.div`
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  font-family: ${props => props.theme.Font.Primary};
  margin-top: 0;
  color: red;
  white-space:pre-wrap;
`;

export default FormItemErrorMessage;