import styled from 'styled-components';
import Form from './Form';

const FloatingForm = styled(Form)`
  width: 84vw;
  max-width: 460px;
  max-height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

export default FloatingForm;