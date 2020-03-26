import styled from 'styled-components';

const MenuListIconContainer = styled.div`
  float: right;
  height: ${props => props.theme.Dim.NavBarHeight - 2 * props.theme.Dim.NavBarPadding}px;
  width: ${props => props.theme.Dim.NavBarHeight - 2 * props.theme.Dim.NavBarPadding}px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export default MenuListIconContainer;