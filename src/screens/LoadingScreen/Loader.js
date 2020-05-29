import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border-bottom: 0 solid #ffffff05;

  box-shadow: 
    0 -10px 20px 20px #ffffff40 inset,
    0 -5px 15px 10px #ffffff50 inset,
    0 -2px 5px #ffffff80 inset,
    0 -3px 2px #ffffffBB inset,
    0 2px 0px #ffffff,
    0 2px 3px #ffffff,
    0 5px 5px #ffffff90,
    0 10px 15px #ffffff60,
    0 10px 20px 20px #ffffff40;
  filter: blur(3px);
  animation: 2s ${rotate} linear infinite;
`;

export default Loader;