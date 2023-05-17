import { createSchema } from "../lib/utils/createSchema";
import { isEmail, isInteger, maxLength, minLength } from "../lib/validators";

export const signupValidationSchema = createSchema({
  name: {
    isRequired: true,
    validators: [minLength(3), maxLength(50)],
  },
  age: {
    isRequired: true,
    validators: [isInteger()],
  },
  password: {
    isRequired: true,
    validators: [minLength(8), maxLength(100)],
  },
  confirmPassword: {
    isRequired: "Please confirm your password",
    validators: [minLength(8), maxLength(100)],
    match: {
      to: "password",
      message: "Passwords are not equal",
    },
  },
  email: {
    isRequired: true,
    validators: [isEmail("Please provide a valid email address")],
  },
  bio: {
    validators: [minLength(5)],
  },
});
