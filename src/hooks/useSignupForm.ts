import { useForm } from "../lib/hooks/useForm";
import { signupValidationSchema } from "../validation/signupValidationSchema";

export const useSignupForm = () => {
  const { handleSubmit, ...formState } = useForm(signupValidationSchema);

  const submitHandler = (values: any) => {
    console.log(values);
  };

  return {
    handleSubmit: handleSubmit(submitHandler),
    ...formState,
  };
};
