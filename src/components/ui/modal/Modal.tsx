import { FC, HTMLAttributes } from "react";

import Card from "../card";

import classes from "./Modal.module.css";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose, className }) => {
  const backdropStyles = [classes.backdrop];
  const modalStyles = [classes.modal];

  if (isOpen) {
    backdropStyles.push(classes.open);
    modalStyles.push(classes.open);
  }

  if (className) {
    modalStyles.push(className);
  }

  return (
    <>
      <div className={backdropStyles.join(" ")} onClick={onClose} />
      <Card className={modalStyles.join(" ")}>{children}</Card>
    </>
  );
};

export default Modal;
