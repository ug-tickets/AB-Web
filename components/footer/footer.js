import React from "react";
import clsx from "clsx";
import styles from "./footer.module.css";
import { MainBody } from "../shared/main-body";

const Footer = () => {
  return (
    <div className={clsx(styles["footer"])}>
      <MainBody>Footer is here</MainBody>
    </div>
  );
};

export { Footer };
