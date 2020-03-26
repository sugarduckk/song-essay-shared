import React from 'react';
import useSyntheticEvents from '../custom-hooks/useSyntheticEvents';

const withSyntheticEvents = Component => props => {
  const [itemDom, handlers] = useSyntheticEvents();
  return <Component {...props} {...handlers} {...itemDom} />;
};

export default withSyntheticEvents;