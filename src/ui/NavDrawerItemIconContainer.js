import styled from 'styled-components';

const NavDrawerItemIconContainer = styled.div`
  height: ${props => props.theme.Dim.NavBarHeight}px;
  width: ${props => props.theme.Dim.NavBarHeight}px;
  padding: ${props => props.theme.Dim.NavBarPadding * 1.5}px;
  box-sizing: border-box;
`;

export default NavDrawerItemIconContainer;