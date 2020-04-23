import React from 'react';

const useForm = (defaultValues, callback, validate, bypassButtons = []) => {

  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [buttonId, setButtonId] = React.useState();

  const onButtonClick = React.useCallback(e => {
    setButtonId(e.target.name);
  }, []);

  const resetField = React.useCallback(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  React.useEffect(() => {
    // no errors
    if (Object.keys(errors).length === 0) {
      if (isSubmitting) {
        callback(values, setIsSubmitting, resetField, buttonId);
      }
    }
    else {
      setIsSubmitting(false);
    }
  }, [errors, callback, isSubmitting, values, resetField, buttonId]);

  const handleSubmit = React.useCallback((event) => {
    if (event) event.preventDefault();
    if (!bypassButtons.includes(buttonId)) {
      setErrors(validate(values));
    }
    else {
      setErrors({});
    }
    setIsSubmitting(true);
  }, [validate, values, buttonId, bypassButtons]);

  const handleChange = React.useCallback((event) => {
    event.persist();
    const newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
    setErrors(validate(newValues));
  }, [validate, values]);

  const handleCustomChange = React.useCallback((name, getNewValue) => {
    setValues(values => {
      const latestValue = values[name];
      const newValues = { ...values, [name]: getNewValue(latestValue) };
      setErrors(validate(newValues));
      return newValues;
    });

  }, [validate]);

  return {
    handleChange,
    handleCustomChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    onButtonClick
  };
};

export default useForm;