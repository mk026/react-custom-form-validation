import { FC } from "react";

import Form from "../ui/form";
import TextField from "../ui/text-field";
import Button from "../ui/button";
import { useSignupForm } from "../../hooks/useSignupForm";

const FormExample: FC = () => {
  const { handleSubmit, handleReset, errors, register, isValid } =
    useSignupForm();

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
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
