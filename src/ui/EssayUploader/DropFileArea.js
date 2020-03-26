import styled from 'styled-components';

const DropFileArea = styled.div`
  padding: 1em;
  background: lightgrey;
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  border: 4px ${props => props.isDragOver ? props.theme.Color.Primary : 'darkgrey'} dashed;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  font-family: Prompt;
  text-align: center;
  box-shadow: 0px 2px ${props => props.isDragOver ? '4' : '2'}px 0px rgba(0,0,0,0.4);
  // > * {
  //   pointer-events: ${props => props.isDragOver ? 'none' : 'auto'};
  // }
`;

export default DropFileArea;