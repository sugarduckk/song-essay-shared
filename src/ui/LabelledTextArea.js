import React from 'react';
import Label from './Label';
import FormItemErrorMessage from './FormItemErrorMessage';
import TextArea from './TextArea';

const LabelledTextArea = ({ label, error, ...otherProps }) => {
    return <>
        <Label htmlFor={label}>{label}</Label>
        <TextArea id={label} {...otherProps} />
        {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
    </>;
};

export default LabelledTextArea;