import React from 'react';
import Label from './Label';
import Input from './Input';
import FormItemErrorMessage from './FormItemErrorMessage';

const TextInput = ({ value, handleChange, error, name, label, remark, type, ...otherProps }) => {
  const onChange = React.useCallback(e => {
    if (type === 'number') {
      handleChange(name, parseInt(e.target.value));
    }
    else {
      handleChange(name, e.target.value);
    }
  }, [handleChange, name, type]);
  return <>
    <Label htmlFor={label}>{label}</Label>
    <Input id={label} value={value} onChange={onChange} type={type} {...otherProps} />
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </>;
};

export default TextInput;