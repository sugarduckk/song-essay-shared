import styled from 'styled-components';
import withSyntheticEvents from '../higher-order-components/withSyntheticEvents';

const Button = styled.button`
  border-radius: ${props => props.theme.Dim.BorderRadius}px;
  color: white;
  padding: 0.75em;
  cursor: pointer;
  margin: ${props => props.theme.Dim.FormItemMargin}px;
  box-shadow: 0px 2px ${props => props.isInteracted ? '4' : '2'}px 0px rgba(0,0,0,0.4);
  font-family: ${props => props.theme.Font.Primary};
  font-size: 1em;
`;

export default Button;