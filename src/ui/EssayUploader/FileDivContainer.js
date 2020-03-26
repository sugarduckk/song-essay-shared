import styled from 'styled-components';
import withSyntheticEvents from '../../higher-order-components/withSyntheticEvents';

const FileDivContainer = withSyntheticEvents(styled.div`
  background: ${props => props.error ? '#fcdfe5' : 'white'};
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0px ${props => props.isInteracted ? '2' : '0'}px ${props => props.isInteracted ? '2' : '0'}px 0px rgba(0,0,0,0.4);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`);

export default FileDivContainer;