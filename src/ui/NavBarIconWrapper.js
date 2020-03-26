import styled from 'styled-components';

const NavBarIconWrapper = styled.div`
  float: right;
  height: ${props => props.theme.Dim.NavBarHeight - 2 * props.theme.Dim.NavBarPadding}px;
  width: ${props => props.theme.Dim.NavBarHeight - 2 * props.theme.Dim.NavBarPadding}px;
  cursor: pointer;
`;

export default NavBarIconWrapper;