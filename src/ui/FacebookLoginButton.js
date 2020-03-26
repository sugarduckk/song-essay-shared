import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const FacebookLoginButton = styled(PrimaryButton)`
  background: #1778F2;
  border: 1px solid #1778F2;
  > * {
    pointer-events: none;
  }
`;

export default FacebookLoginButton;