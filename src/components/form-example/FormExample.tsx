import { FC } from "react";

import { useForm } from "../../lib/hooks/useForm";
import { createSchema } from "../../lib/utils/createSchema";
import {
  isEmail,
  isInteger,
  maxLength,
  minLength,
} from "../../lib/utils/validators";
import Form from "../ui/form";
import TextField from "../ui/text-field";
import Button from "../ui/button";

const exampleValidationSchema = createSchema({
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
    isRequired: true,
    validators: [minLength(8), maxLength(100)],
  },
  email: {
    isRequired: true,
    validators: [isEmail("Please provide a valid email address")],
  },
  bio: {
    validators: [minLength(5)],
  },
});

const FormExample: FC = () => {
  const { errors, register, isValid, handleSubmit, handleReset } = useForm(
    exampleValidationSchema
  );
  const submitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)} onReset={handleReset}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors["name"]}
        message={errors["name"]}
      />
      <TextField
        {...register("age")}
        label="Age"
        error={!!errors["age"]}
        message={errors["age"]}
      />
      <TextField
        {...register("password")}
        type="password"
        label="Password"
        error={!!errors["password"]}
        message={errors["password"]}
      />
      <TextField
        {...register("confirmPassword")}
        type="password"
        label="Password"
        error={!!errors["confirmPassword"]}
        message={errors["confirmPassword"]}
      />
      <TextField
        {...register("email")}
        type="email"
        label="Email"
        error={!!errors["email"]}
        message={errors["email"]}
      />
      <TextField
        {...register("bio")}
        label="About yourself"
        error={!!errors["bio"]}
        message={errors["bio"]}
      />
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>
      <Button type="reset">Reset</Button>
    </Form>
  );
};

export default FormExample;
