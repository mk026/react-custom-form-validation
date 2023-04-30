import { ButtonHTMLAttributes, FC } from "react";

import classes from "./Button.module.css";

type ButtonVariant = "success" | "error" | "warning" | "info";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <button
      className={
        variant ? classes.button + " " + classes[variant] : classes.button
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
