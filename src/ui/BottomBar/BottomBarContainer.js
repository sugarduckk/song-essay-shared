import styled from 'styled-components';

const BottomBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.Color.Primary};
  height: ${props => props.theme.Dim.NavBarHeight}px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
`;

export default BottomBarContainer;