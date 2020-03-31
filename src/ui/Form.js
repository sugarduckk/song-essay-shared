import styled from 'styled-components';

const Form = styled.form`
  overflow: auto;
  background: white;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  display: ${props => props.show ? 'block' : 'none'};
`;

export default Form;