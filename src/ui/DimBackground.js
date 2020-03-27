import styled from 'styled-components';

const DimBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.8);
  backdrop-filter: blur(16px);
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
  transition: 0.15s ease-out;
  z-index: 3;
`;

export default DimBackground;