import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  InputHTMLAttributes,
  useState,
} from "react";

import { Schema } from "../utils/types";

export const useForm = (schema: Schema) => {
  const [isValid, setIsValid] = useState(true);
  const [formState, setFormState] = useState(schema);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
      return;
    }
    resetFieldErrors(name);
    for (const validator of validators) {
      const error = validator(name, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
        setIsValid(false);
      }
    }
  };
  const validateForm = () => {
    setIsValid(true);
    for (const name in formState) {
      validateField(name, formState[name].value);
      if (errors[name]) {
        setIsValid(false);
      }
    }
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
    setIsValid(true);
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
      validateForm();
      if (!isValid) {
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
