import { FC } from "react";

import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>React Custom Form Validation</h1>
    </header>
  );
};

export default Header;
