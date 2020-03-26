import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => props.noScroll ? 'hidden' : 'auto'};
  }
`;

export default GlobalStyle;