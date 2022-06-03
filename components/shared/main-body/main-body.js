import React from "react";
import styles from "./main-body.module.css";
import clsx from "clsx";

const MainBody = ({ children }) => {
  return (
    <div className={clsx("md:w-9/12", styles["container"])}>{children}</div>
  );
};

export { MainBody };
