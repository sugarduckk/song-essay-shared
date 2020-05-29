import PrimaryButtonTemp from './PrimaryButton';
import FacebookLoginButtonTemp from './FacebookLoginButton';
import GoogleLoginButtonTemp from './GoogleLoginButton';
import withSyntheticEvents from '../higher-order-components/withSyntheticEvents';

const PrimaryButton = withSyntheticEvents(PrimaryButtonTemp);
const FacebookLoginButton = withSyntheticEvents(FacebookLoginButtonTemp);
const GoogleLoginButton = withSyntheticEvents(GoogleLoginButtonTemp);

export {
  PrimaryButton,
  FacebookLoginButton,
  GoogleLoginButton
};