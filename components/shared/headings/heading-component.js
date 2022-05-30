import React from "react";
import clsx from "clsx";
import styles from "./headings.module.css";

const Headings = ({ options }) => {
  return options ? (
    <div className={clsx("flex justify-between ml-3 md:ml-20 mr-10 my-3")}>
      <div className={styles["heading"]}>{options.heading}</div>
      {options.allLinkUrl && (
        <div className={styles["headingsLink"]}>
          <a href={options.allLinkUrl}>{options.linkTxt}</a>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export { Headings };
