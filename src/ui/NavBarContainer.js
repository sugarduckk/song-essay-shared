import styled from 'styled-components';

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  background: ${props => props.theme.Color.Primary};
  height: ${props => props.theme.Dim.NavBarHeight}px;
  width: 100%;
  padding: ${props => props.theme.Dim.NavBarPadding}px;
  box-sizing: border-box;
  transition: top 0.15s;
  z-index: 2;
`;

export default NavBarContainer;