import { FC, InputHTMLAttributes } from "react";

const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} />;
};

export default TextField;
