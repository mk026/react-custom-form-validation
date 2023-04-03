import { FormHTMLAttributes, forwardRef } from "react";

const Form = forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
  ({ children, ...formProps }, ref) => {
    return (
      <form {...formProps} ref={ref}>
        {children}
      </form>
    );
  }
);

export default Form;
