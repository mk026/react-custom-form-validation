import { FC } from "react";

import { useNotification } from "../../hooks/useNotification";
import Modal from "../ui/modal";
import SubmittedData from "./submitted-data";
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
      <h3 className={classes.title}>Successfully submitted form</h3>
      <SubmittedData data={data} />
      <Button className={classes.button} onClick={toggleNotification}>
        Close
      </Button>
    </Modal>
  );
};

export default Notification;
