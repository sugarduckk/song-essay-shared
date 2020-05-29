import styled from 'styled-components';

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.Color.Primary || 'green'};
`;

export default FullScreen;