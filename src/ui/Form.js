import styled from 'styled-components';

const Form = styled.form`
  overflow: auto;
  background: white;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  display: ${props => {
    if (props.show === undefined || props.show) {
      return 'block';
    }
    else {
      return 'none';
    }
  }};
`;

export default Form;