import { FC, PropsWithChildren } from "react";

const Form: FC<PropsWithChildren> = ({ children }) => {
  return <form>{children}</form>;
};

export default Form;
