import styled from 'styled-components';

const LoadingScreenContainer = styled.div`
  position: relative;
  background: radial-gradient(#CECECE, #fff);
  //background: ${props => props.theme.Color.Background};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
	justify-content: center;
	align-items: center;
`;

export default LoadingScreenContainer;