import React from 'react';
import DimBackground from './DimBackground';
import PopUpContainer from './PopUpContainer';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';
import FormP from './FormP';

const ConfirmationScreen = ({ confirmationScreen, onCancel, onConfirm, onTransitionEnd }) => {
  const { confirmCallback, show } = confirmationScreen;
  const onConfirmConfirmationScreen = React.useCallback(e => {
    const promise = confirmCallback();
    if (promise) {
      promise.then(() => {
        onConfirm();
      });
    }
    else {
      onConfirm();
    }
  }, [confirmCallback, onConfirm]);
  return <DimBackground show={show} onTransitionEnd={onTransitionEnd}>
    <PopUpContainer>
      <FormP>{confirmationScreen.text}</FormP>
      <SubmitButton onClick={onConfirmConfirmationScreen}>Confirm</SubmitButton>
      <CancelButton onClick={onCancel}>Cancel</CancelButton>
    </PopUpContainer>
  </DimBackground>;
};

export default ConfirmationScreen;