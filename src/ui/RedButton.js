import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const RedButton = styled(PrimaryButton)`
  background: ${props => props.theme.Color.RedButton};
  border-color: ${props => props.theme.Color.RedButton};
`;

export default RedButton;