import React from "react";
import clsx from "clsx";
import styles from "./footer.module.css";
import { FooterDeals } from "./footer-deals";
import { FooterLinks } from "./footer-links";

const Footer = () => {
  return (
    <div className={clsx(styles["footer"])}>
      <FooterDeals />
      <FooterLinks />
    </div>
  );
};

export { Footer };
