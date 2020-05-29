import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const FacebookLoginButton = styled(PrimaryButton)`
  background: ${props => props.isInteracted ? '#4593f4' : '#1778F2'};
  border: 1px solid ${props => props.isInteracted ? '#4593f4' : '#1778F2'};
  > * {
    pointer-events: none;
  }
`;

export default FacebookLoginButton;