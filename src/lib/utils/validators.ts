import { ValidatorFactory } from "./types";

export const minLength: ValidatorFactory =
  (length: number, message?: string) => (name, value) => {
    if (value.length < length) {
      return (
        message ||
        `${name} length must be equal to or longer than ${length} characters`
      );
    }
  };

export const maxLength: ValidatorFactory =
  (length: number, message?: string) => (name, value) => {
    if (value.length > length) {
      return (
        message ||
        `${name} length must be equal to or shorter than ${length} characters`
      );
    }
  };

export const isNumber: ValidatorFactory =
  (message?: string) => (name, value) => {
    if (value && Number.isNaN(+value)) {
      return message || `${name} must be a valid number`;
    }
  };

export const isInteger: ValidatorFactory =
  (message?: string) => (name, value) => {
    if (value && !Number.isInteger(+value)) {
      return message || `${name} must be a valid integer`;
    }
  };

export const isEmail: ValidatorFactory =
  (message?: string) => (name, value) => {
    if (value && !/^\S+@\S+\.\S+$/.test(value)) {
      return message || `${name} is not a valid email address`;
    }
  };
