import { FC, HTMLAttributes, PropsWithChildren } from "react";

import classes from "./Card.module.css";

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={className ? classes.card + " " + className : classes.card}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
