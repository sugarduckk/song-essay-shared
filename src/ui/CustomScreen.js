import React from 'react';
import DimBackground from './DimBackground';
import PopUpContainer from './PopUpContainer';
import FloatingForm from './FloatingForm';
import Fieldset from './Fieldset';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';
import useForm from '../custom-hooks/useForm';

const CustomScreen = ({ customScreen, onSubmit, onCancel }) => {
    const { FormItems, formProps, show, validator, submitCallback, defaultValues } = customScreen;

    const onCustomScreenSubmit = React.useCallback((values, setIsSubmitting) => {
        submitCallback(values)
            .then(() => {
                setIsSubmitting(false);
                onSubmit();
            })
            .catch(error => {
                setIsSubmitting(false);
                console.log(error.code);
            });
    }, [submitCallback, onSubmit]);

    const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(defaultValues, onCustomScreenSubmit, validator);

    return <DimBackground show={show}>
        <PopUpContainer>
            <FloatingForm onSubmit={handleSubmit}>
                <Fieldset disabled={isSubmitting}>
                    {FormItems && <FormItems {...formProps} values={values || defaultValues} handleChange={handleChange} errors={errors} />}
                    <SubmitButton type='submit'>Submit</SubmitButton>
                    <CancelButton type='button' onClick={onCancel}>Cancel</CancelButton>
                </Fieldset>
            </FloatingForm>
        </PopUpContainer>
    </DimBackground>;
};

export default CustomScreen;