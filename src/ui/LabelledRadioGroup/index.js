import React from 'react';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';
import RadioOption from './RadioOption';
import RadioOptionsContainer from './RadioOptionsContainer';
import HiddenRadioInput from './HiddenRadioInput';
import UploadFileIcon from '../../res/icons/UploadFileIcon';
import TextIcon from '../../res/icons/TextIcon';

const LabelledRadioGroup = ({ options, value, onChange, error, label, name }) => {
  return <>
    <Label>{label}</Label>
    <RadioOptionsContainer>
      {options.map((option, optionIndex) => {
        return <RadioOption key={optionIndex} checked={option.value === value}>
          <HiddenRadioInput
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
          />
          {
            option.value === 'file' ?
              <UploadFileIcon style={{ verticalAlign: 'middle' }} fill='white' width='1.5em' height='1.5em' />
              :
              <TextIcon style={{ verticalAlign: 'middle' }} fill='white' width='1.5em' height='1.5em' />
          }

          {option.label}
        </RadioOption>;
      })}
    </RadioOptionsContainer>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </>;
};

export default LabelledRadioGroup;