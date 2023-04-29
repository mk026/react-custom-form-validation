import { createValidator } from "../utils/createValidator";

export const minLength = createValidator(
  (length: number, message?: string) => (name, value) => {
    if (value.length < length) {
      return (
        message ||
        `${name} length must be equal to or longer than ${length} characters`
      );
    }
  }
);

export const maxLength = createValidator(
  (length: number, message?: string) => (name, value) => {
    if (value.length > length) {
      return (
        message ||
        `${name} length must be equal to or shorter than ${length} characters`
      );
    }
  }
);

export const isNumber = createValidator((message?: string) => (name, value) => {
  if (Number.isNaN(+value)) {
    return message || `${name} must be a valid number`;
  }
});

export const isInteger = createValidator(
  (message?: string) => (name, value) => {
    if (!Number.isInteger(+value)) {
      return message || `${name} must be a valid integer`;
    }
  }
);

export const isEmail = createValidator((message?: string) => (name, value) => {
  if (!/^\S+@\S+\.\S+$/.test(value)) {
    return message || `${name} is not a valid email address`;
  }
});
