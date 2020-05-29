import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${props => props.theme.Font.Primary};
`;

export default Text;