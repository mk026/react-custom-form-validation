import { FC, InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  message?: string;
}

const TextField: FC<TextFieldProps> = ({ label, error, message, ...props }) => {
  return (
    <>
      <label style={{ color: error ? "red" : "white" }}>
        {label}
        <input {...props} />
      </label>
      {message && <span style={{ color: "darkgray" }}>{message}</span>}
    </>
  );
};

export default TextField;
