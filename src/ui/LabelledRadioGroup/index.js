import React from 'react';
import Label from '../Label';
import FormItemErrorMessage from '../FormItemErrorMessage';
import RadioOption from './RadioOption';
import RadioOptionsContainer from './RadioOptionsContainer';
import HiddenRadioInput from './HiddenRadioInput';
import UploadFileIcon from '../../res/icons/UploadFileIcon';
import TextIcon from '../../res/icons/TextIcon';
import styled from 'styled-components';

const LabelledRadioGroup = ({ options, value, onChange, error, label, name }) => {
  return <>
    <Label>{label}</Label>
    <RadioOptionsContainer>
      {options.map((option, optionIndex) => {
        const { Icon } = option;
        const checked = option.value === value;
        const StyledIcon = styled(Icon)`
          width: auto;
          height: 1.5em;
          fill: ${props => checked ? 'white' : props.theme.Color.Primary};
          vertical-align: middle;
          padding: 0 0.5em;
          box-sizing: border-box;
        `;
        return <RadioOption key={optionIndex} checked={option.value === value}>
          <HiddenRadioInput
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
          />
          <StyledIcon />
          {/* {
            option.value === 'file' ?
              <UploadFileIcon style={{ verticalAlign: 'middle', width: 'auto', fill: 'white' }} height='1.5em' />
              :
              <TextIcon style={{ verticalAlign: 'middle', width: 'auto', fill: 'white' }} height='1.5em' />
          } */}

          {option.label}
        </RadioOption>;
      })}
    </RadioOptionsContainer>
    {error && <FormItemErrorMessage>{error}</FormItemErrorMessage>}
  </>;
};

export default LabelledRadioGroup;