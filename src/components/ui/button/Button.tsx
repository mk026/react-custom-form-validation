import { ButtonHTMLAttributes, FC } from "react";

import classes from "./Button.module.css";

type ButtonVariant = "success" | "error" | "warning" | "info";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  const styles = [classes.button];
  if (variant) {
    styles.push(classes[variant]);
  }
  if (className) {
    styles.push(className);
  }

  return (
    <button className={styles.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
