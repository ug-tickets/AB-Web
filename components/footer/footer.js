import React from "react";
import clsx from "clsx";
import styles from "./footer.module.css";
import { FooterDeals } from "./footer-deals";
import { FooterLinks } from "./footer-links";

const Footer = ({ showDeals, deal }) => {
  return (
    <div className={clsx(styles["footer"])}>
      {showDeals && <FooterDeals bookDeal={deal} />}
      <FooterLinks />
    </div>
  );
};

export { Footer };
