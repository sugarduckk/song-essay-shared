import styled from 'styled-components';

const NavDrawerContainer = styled.div`
  height: 100vh;
  width: 80vw;
  max-width: 360px;
  position: absolute;
  top: 0;
  background: white;
  transition: 0.15s ease-out;
  right: ${props => props.show ? '0' : 'calc(-1*min(80vw,360px))'};
  overflow: auto;
`;

export default NavDrawerContainer;