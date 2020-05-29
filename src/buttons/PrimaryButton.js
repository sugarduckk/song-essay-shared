import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  background: ${props => props.isInteracted ? props.theme.Color.PrimaryHover : props.theme.Color.Primary};
  border: 1px solid ${props => props.isInteracted ? props.theme.Color.PrimaryHover : props.theme.Color.Primary};
`;

export default PrimaryButton;