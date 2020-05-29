import React from 'react';
import LoadingScreenContainer from './LoadingScreenContainer';
import LoadingContainer from './LoadingContainer';
import Loader from './Loader';
import RatioContainer from './RatioContainer';
import Text from './Text';

const LoadingScreen = ({ text }) => {
  return <LoadingScreenContainer>
    <RatioContainer>
      <LoadingContainer>
        <Loader />
        <Text>
          {text}
        </Text>
      </LoadingContainer>
    </RatioContainer>
  </LoadingScreenContainer>;
};

export default LoadingScreen;