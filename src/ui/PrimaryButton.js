import styled from 'styled-components';
import withSyntheticEvents from '../higher-order-components/withSyntheticEvents';

const PrimaryButton = withSyntheticEvents(styled.button`
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  background: ${props => props.theme.Color.Primary};
  border: 1px solid ${props => props.theme.Color.Primary};
  color: white;
  padding: 0.75em;
  cursor: pointer;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  box-shadow: 0px 2px ${props => props.isInteracted ? '4' : '2'}px 0px rgba(0,0,0,0.4);
  font-family: Prompt;
  &:disabled {
    opacity: 0.4;
  }
`);

export default PrimaryButton;