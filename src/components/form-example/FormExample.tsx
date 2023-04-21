import { FC } from "react";

import { useForm } from "../../lib/hooks/useForm";
import { createSchema } from "../../lib/utils/createSchema";
import {
  isEmail,
  isInteger,
  isRequired,
  isString,
} from "../../lib/utils/validators";
import Form from "../ui/form";
import TextField from "../ui/text-field";
import Button from "../ui/button";

const exampleValidationSchema = createSchema({
  name: [isRequired(), isString({ min: 3, max: 50 })],
  age: [isRequired(), isInteger()],
  password: [isRequired(), isString({ min: 8, max: 100 })],
  email: [
    isRequired(),
    isEmail({ message: "Please provide a valid email address" }),
  ],
  bio: [isString({ max: 5 })],
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
