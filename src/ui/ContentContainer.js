import styled from 'styled-components';

const ContentContainer = styled.div`
  padding-top: ${props => props.theme.Dim.NavBarHeight}px;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  background: ${props => props.theme.Color.ContentBackground};
`;

export default ContentContainer;