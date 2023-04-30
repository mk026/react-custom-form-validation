import { FC } from "react";

import { useSignupForm } from "../../hooks/useSignupForm";
import Form from "../ui/form";
import TextField from "../ui/text-field";
import Button from "../ui/button";
import Card from "../ui/card/Card";

import classes from "./SignupForm.module.css";

const FormExample: FC = () => {
  const { handleSubmit, handleReset, errors, register, isValid } =
    useSignupForm();

  return (
    <Card className={classes.wrapper}>
      <h2 className={classes["form-title"]}>Signup Form Example</h2>
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
        <Button
          type="submit"
          disabled={!isValid}
          className={classes["submit-btn"]}
        >
          Submit
        </Button>
        <Button type="reset">Reset</Button>
      </Form>
    </Card>
  );
};

export default FormExample;
