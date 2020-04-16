import styled from 'styled-components';

const AnotherContainer = styled.div`
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  @media (min-width: ${props => props.theme.Dim.phoneWidth}px) {
    padding: 0 25%;
  }
`;

export default AnotherContainer;