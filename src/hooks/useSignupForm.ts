import { useForm } from "../lib/hooks/useForm";
import { signupValidationSchema } from "../validation/signupValidationSchema";
import { useNotification } from "./useNotification";

export const useSignupForm = () => {
  const { handleSubmit, ...formState } = useForm(signupValidationSchema);
  const { setData, toggleNotification } = useNotification();

  const submitHandler = (values: Record<string, string>) => {
    setData(values);
    toggleNotification();
  };

  return {
    handleSubmit: handleSubmit(submitHandler),
    ...formState,
  };
};
