import styled from 'styled-components';

const EssayUploaderArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  border: 1px solid lightgrey;
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  padding: 0.75em;
`;

export default EssayUploaderArea;