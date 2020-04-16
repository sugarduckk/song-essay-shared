import styled from 'styled-components';

const ZoomBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
`;

export default ZoomBarContainer;