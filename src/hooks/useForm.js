import React from 'react';

const useForm = (defaultValues, onSubmit, validate, handleError, onSubmitted) => {
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  React.useEffect(() => {
    if (validate) {
      setErrors(validate(values));
    }
  }, [values, validate]);
  const handleSubmit = React.useCallback(e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      setSubmitting(true);
      onSubmit(values)
        .then((...args) => {
          setSubmitting(false);
          if (onSubmitted) {
            onSubmitted(...args);
          }
        })
        .catch((...args) => {
          setSubmitting(false);
          if (handleError) {
            handleError(values, ...args);
          }
        });
    }
  }, [errors, handleError, onSubmit, onSubmitted, values]);
  const handleChange = React.useCallback((key, value) => {
    setValues({
      ...values,
      [key]: value
    });
  }, [values]);
  return {
    handleSubmit,
    submitting,
    values,
    errors,
    handleChange,
    setValues
  };
};

export default useForm;