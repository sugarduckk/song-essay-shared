import styled from 'styled-components';

const FileDivContainer = styled.div`
  background: ${props => props.error ? '#fcdfe5' : 'white'};
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export default FileDivContainer;