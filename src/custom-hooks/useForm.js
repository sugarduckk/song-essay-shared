import React from 'react';

const useForm = (defaultValues, callback, validate) => {

  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const resetField = React.useCallback(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values, setIsSubmitting, resetField);
    }
    else {
      setIsSubmitting(false);
    }
  }, [errors, callback, isSubmitting, values, resetField]);

  const handleSubmit = React.useCallback((event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }, [validate, values]);

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

  }, [validate, values]);

  return {
    handleChange,
    handleCustomChange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  };
};

export default useForm;