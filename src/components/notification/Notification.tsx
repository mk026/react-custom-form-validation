import { FC } from "react";

import { useNotification } from "../../hooks/useNotification";
import Modal from "../ui/modal";
import Button from "../ui/button";

import classes from "./Notification.module.css";

const Notification: FC = () => {
  const { isOpen, toggleNotification, data } = useNotification();

  return (
    <Modal
      isOpen={isOpen}
      onClose={toggleNotification}
      className={classes.notification}
    >
      <h3>Successfully submitted form</h3>
      {Object.entries(data).map(([name, value]) => (
        <p key={name}>{`${name}: ${value}`}</p>
      ))}
      <Button onClick={toggleNotification}>Close</Button>
    </Modal>
  );
};

export default Notification;
