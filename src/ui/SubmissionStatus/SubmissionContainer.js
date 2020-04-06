import styled from 'styled-components';
import withSyntheticEvents from '../../higher-order-components/withSyntheticEvents';

const SubmissionContainer = withSyntheticEvents(styled.div`
  border: 1px solid ${props => props.theme.Color.Primary};
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  padding: 20px;
  margin: 20px;
  display: grid;
  box-shadow: 0px ${props => props.isInteracted ? '2px 4px' : '0px 0px'} 0px rgba(0,0,0,0.4);
  @media (min-width: ${props => props.theme.Dim.phoneWidth}px) {
    grid-template-areas:
      "timestamp status"
      "question action";
  }
  grid-template-areas:
    "status"  
    "timestamp"
    "question"
    "action";
  cursor: pointer;
`);

export default SubmissionContainer;