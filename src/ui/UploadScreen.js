import React from 'react';
import DimBackground from './DimBackground';
import PopUpContainer from './PopUpContainer';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

const UploadScreen = ({ uploadScreen, onClose, onCancel, onTransitionEnd }) => {
    const [isUploading, setIsUploading] = React.useState(true);
    const { Component, customProps, show } = uploadScreen;
    const enableCloseButton = React.useCallback(() => {
        setIsUploading(false);
    }, []);
    return <DimBackground show={show} onTransitionEnd={onTransitionEnd}>
        <PopUpContainer>
            {Component && <Component {...customProps} enableCloseButton={enableCloseButton} />}
            <SubmitButton type='button' disabled={isUploading} onClick={onClose}>Close</SubmitButton>
            <CancelButton type='button' onClick={onCancel}>Cancel</CancelButton>
        </PopUpContainer>
    </DimBackground>;
};

export default UploadScreen;