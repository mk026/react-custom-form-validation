import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

import { Schema } from "../types";

export const useForm = (schema: Schema) => {
  const [isValid, setIsValid] = useState(true);
  const [formState, setFormState] = useState(schema);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const hasErrors = Object.keys(errors).length;
    setIsValid(hasErrors ? false : true);
  }, [errors]);

  const resetFieldErrors = (name: string) => {
    setErrors((prev) => {
      const errors = { ...prev };
      delete errors[name];
      return errors;
    });
  };
  const validateField = (name: string, value: string) => {
    const { isRequired, validators } = formState[name];
    if (!value && !isRequired) {
      return true;
    }
    if (!value && isRequired) {
      const error =
        typeof isRequired === "string"
          ? isRequired
          : `${name} is a required field`;
      setErrors((prev) => ({ ...prev, [name]: error }));
      return false;
    }
    resetFieldErrors(name);
    for (const validator of validators) {
      const error = validator(name, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
        return false;
      }
    }
    return true;
  };
  const validateForm = () => {
    let formIsValid = true;
    for (const name in formState) {
      let fieldIsValid = validateField(name, formState[name].value);
      if (!fieldIsValid) {
        formIsValid = false;
      }
    }
    return formIsValid;
  };
  const handleChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState((prev) => ({
      ...prev,
      [name]: { ...prev[name], value },
    }));
    if (errors[name]) {
      validateField(name, value);
    }
  };
  const handleReset = () => {
    setFormState(schema);
    setErrors({});
  };
  const handleFocus = (name: string) => (e: FocusEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [name]: { ...prev[name], isTouched: true },
    }));
  };
  const handleBlur = (name: string) => (e: FocusEvent<HTMLInputElement>) => {
    validateField(name, formState[name].value);
  };
  const register = (name: string): InputHTMLAttributes<HTMLInputElement> => ({
    value: formState[name].value,
    onChange: handleChange(name),
    onBlur: handleBlur(name),
    onFocus: handleFocus(name),
  });

  const handleSubmit =
    (handler: (values: Record<string, string>) => void) =>
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formIsValid = validateForm();
      if (!formIsValid) {
        return;
      }
      const values = Object.entries(formState).reduce(
        (values, [name, { value }]) => ({ ...values, [name]: value }),
        {}
      );
      handler(values);
    };

  return {
    errors,
    register,
    isValid,
    handleReset,
    handleSubmit,
  };
};
