import styled from 'styled-components';

const FullScreenPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.Color.Primary};
`;

export default FullScreenPageContainer;