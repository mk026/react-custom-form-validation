import { ValidatorFactory } from "./types";

export interface IsStringOptions {
  min?: number;
  max?: number;
}

export const isString: ValidatorFactory<IsStringOptions> =
  (options) => (name, value) => {
    if (typeof value === "string") {
      if (options?.min && value.length < options?.min) {
        return (
          options?.message ||
          `${name} length must be equal to or longer than ${options?.min} characters`
        );
      }
      if (options?.max && value.length > options?.max) {
        return (
          options?.message ||
          `${name} length must be equal to or shorter than ${options?.min} characters`
        );
      }
    } else {
      return options?.message || `${name} is not a string`;
    }
  };

export const isRequired: ValidatorFactory = (options) => (name, value) => {
  if (!value) {
    return options?.message || `${name} is a required field`;
  }
};

export const isNumber: ValidatorFactory = (options) => (name, value) => {
  if (value && Number.isNaN(+value)) {
    return options?.message || `${name} must be a valid number`;
  }
};

export const isInteger: ValidatorFactory = (options) => (name, value) => {
  if (value && !Number.isInteger(+value)) {
    return options?.message || `${name} must be a valid integer`;
  }
};

export const isEmail: ValidatorFactory = (options) => (name, value) => {
  if (value && !/^\S+@\S+\.\S+$/.test(value)) {
    return options?.message || `${name} is not a valid email address`;
  }
};
