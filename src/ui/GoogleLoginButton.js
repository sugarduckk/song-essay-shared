import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const GoogleLoginButton = styled(PrimaryButton)`
  background: white;
  border: 1px solid white;
  color: grey;
  font-family: Roboto;
  > * {
    pointer-events: none;
  }
`;

export default GoogleLoginButton;