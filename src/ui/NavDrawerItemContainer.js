import styled, { css } from 'styled-components';

const NavDrawerItemContainer = styled.div`
  height: ${props => props.theme.Dim.NavBarHeight}px;
  cursor: pointer;
  margin: 4%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.Color.InactiveText};
  -webkit-tap-highlight-color: transparent;
  ${props => {
    if (props.isInteracted) {
      return css`
        background: linear-gradient(90deg, ${props => props.theme.Color.ThemeOneDark} 0%, ${props => props.theme.Color.ThemeOneLight} 100%);
        color: white;
        outline: 0;
      `;
    }
  }}
`;

export default NavDrawerItemContainer;