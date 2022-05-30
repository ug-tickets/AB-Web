import React from "react";
import clsx from "clsx";
import styles from "./footer.module.css";
import { MainBody } from "../shared/main-body";
import { FooterDeals } from "./footer-deals";

const Footer = () => {
  return (
    <div className={clsx(styles["footer"])}>
      <MainBody>
        <FooterDeals />
      </MainBody>
    </div>
  );
};

export { Footer };
