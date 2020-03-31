import React from 'react';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';
import Select from '../Select';

const LabelledSelect = ({ label, error, options, ...otherProps }) => {
  return <>
    <Label htmlFor={label}>{label}</Label>
    <Select id={label} {...otherProps}>
      {options.map((option, optionIdx) => {
        const { value, label } = option;
        return <option key={optionIdx} value={value}>{label}</option>;
      })}
    </Select>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </>;
};

export default LabelledSelect;