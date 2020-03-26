import React from 'react';
import Input from './Input';
import Label from './Label';
import FormItemErrorMessage from './FormItemErrorMessage';

const LabelledInput = ({ label, error, ...otherProps }) => {
    return <>
        <Label htmlFor={label}>{label}</Label>
        <Input id={label} {...otherProps} />
        {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
    </>;
};

export default LabelledInput;