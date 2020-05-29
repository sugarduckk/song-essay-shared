import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const GoogleLoginButton = styled(PrimaryButton)`
  background: ${props => props.isInteracted ? 'gainsboro' : 'white'};
  border: 1px solid ${props => props.isInteracted ? 'gainsboro' : 'white'};
  color: grey;
  //font-family: Roboto;
  > * {
    pointer-events: none;
  }
`;

export default GoogleLoginButton;