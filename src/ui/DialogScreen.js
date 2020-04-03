import React from 'react';
import DimBackground from './DimBackground';
import PopUpContainer from './PopUpContainer';
import DismissButton from './DismissButton';
import FormP from './FormP';

const DialogScreen = ({ dialogScreen, onDismiss, onTransitionEnd }) => {
    const { text, show } = dialogScreen;
    return <DimBackground show={show} onTransitionEnd={onTransitionEnd}>
        <PopUpContainer>
            <FormP>{text}</FormP>
            <DismissButton onClick={onDismiss}>Dismiss</DismissButton>
        </PopUpContainer>
    </DimBackground>;
};

export default DialogScreen;