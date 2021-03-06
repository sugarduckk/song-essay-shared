import styled from 'styled-components';

const CenterContentContainer = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: ${props => props.theme.Dim.phoneWidth}px) {
    width: ${props => props.width ? props.width : '60%'};
  }
`;

export default CenterContentContainer;