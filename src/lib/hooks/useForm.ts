import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  InputHTMLAttributes,
  useState,
} from "react";

import { Schema } from "../utils/schema";

export const useForm = (schema: Schema) => {
  const [isValid, setIsValid] = useState(true);
  const [formState, setFormState] = useState(schema);

  const validateField = (name: string) => {
    console.log(`Validating ${name} field`);
  };
  const validateForm = () => {
    setIsValid(true);
    for (const name in formState) {
      validateField(name);
      if (formState[name].errors.length) {
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
    validateField(name);
  };
  const handleReset = () => {
    setFormState(schema);
    setIsValid(true);
  };
  const handleFocus = (name: string) => (e: FocusEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [name]: { ...prev[name], isTouched: true },
    }));
  };
  const handleBlur = (name: string) => (e: FocusEvent<HTMLInputElement>) => {
    validateField(name);
  };
  const register = (name: string): InputHTMLAttributes<HTMLInputElement> => ({
    value: formState[name].value,
    onChange: handleChange(name),
    onBlur: handleBlur(name),
    onFocus: handleFocus(name),
  });

  const handleSubmit =
    (handler: (values: any) => void) => (event: FormEvent<HTMLFormElement>) => {
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
    register,
    isValid,
    handleReset,
    handleSubmit,
  };
};
