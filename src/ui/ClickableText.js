import styled, { css } from 'styled-components';
import withSyntheticEvents from '../higher-order-components/withSyntheticEvents';

const ClickableText = withSyntheticEvents(styled.div`
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  font-size: 0.8em;
  color: grey;
  padding: 0.25em;
  cursor: pointer;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  font-family: Prompt;
  text-align: center;
  text-decoration: none;
  ${props => {
    if (props.isInteracted) {
      return css`color: ${props => props.theme.Color.Primary};`;
    }
  }}
`);

export default ClickableText;