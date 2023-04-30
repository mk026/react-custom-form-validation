import { FC, InputHTMLAttributes } from "react";

import classes from "./TextField.module.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  message?: string;
}

const TextField: FC<TextFieldProps> = ({ label, error, message, ...props }) => {
  const messageStyles = [classes.message];
  const inputStyles = [classes.input];

  if (error) {
    messageStyles.push(classes.error);
    inputStyles.push(classes.error);
  }

  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>
        {label}
        <input className={inputStyles.join(" ")} {...props} />
      </label>
      {message && <span className={messageStyles.join(" ")}>{message}</span>}
    </div>
  );
};

export default TextField;
