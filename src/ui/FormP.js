import styled from 'styled-components';
import P from './P';

const FormP = styled(P)`
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  word-wrap: break-word;
`;

export default FormP;