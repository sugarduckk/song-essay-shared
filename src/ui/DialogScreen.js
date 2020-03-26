import React from 'react';
import DimBackground from './DimBackground';
import PopUpContainer from './PopUpContainer';
import DismissButton from './DismissButton';

const DialogScreen = ({ dialogScreen, onDismiss }) => {
    const { text, show } = dialogScreen;
    return <DimBackground>
        <PopUpContainer>
            <p>{text}</p>
            <DismissButton onClick={onDismiss}>Dismiss</DismissButton>
        </PopUpContainer>
    </DimBackground>;
};

export default DialogScreen;