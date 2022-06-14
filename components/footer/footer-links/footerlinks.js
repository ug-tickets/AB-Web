import React from "react";
import { MainBody } from "../../shared/main-body";
import styles from "./footer-links.module.css";
import clsx from "clsx";

const FooterLinks = () => {
  const footerColumns = [
    {
      heading: "Popular Categories",
      links: [
        {
          title: "African History",
          lnk: "#0",
        },
        { title: "African Biographies & Memoirs", lnk: "#0" },
        { title: "African Classics", lnk: "#0" },
        { title: "African Art & Poetry", lnk: "#0" },
        { title: "African Proverbs & Parables", lnk: "#0" },
        { title: "African Life", lnk: "#0" },
        { title: "African Culture & Tradition", lnk: "#0" },
        { title: "Planning & Development", lnk: "#0" },
        { title: "Leaders & Notable People", lnk: "#0" },
        { title: "Food & Cooking", lnk: "#0" },
        { title: "Herbs & Medicine", lnk: "#0" },
        { title: "Parenting & Family", lnk: "#0" },
      ],
    },
    {
      heading: "Popular Categories",
      links: [
        {
          title: "African History",
          lnk: "#0",
        },
        { title: "African Biographies & Memoirs", lnk: "#0" },
        { title: "African Classics", lnk: "#0" },
        { title: "African Art & Poetry", lnk: "#0" },
        { title: "African Proverbs & Parables", lnk: "#0" },
        { title: "African Life", lnk: "#0" },
        { title: "African Culture & Tradition", lnk: "#0" },
        { title: "Planning & Development", lnk: "#0" },
        { title: "Leaders & Notable People", lnk: "#0" },
        { title: "Food & Cooking", lnk: "#0" },
        { title: "Herbs & Medicine", lnk: "#0" },
        { title: "Parenting & Family", lnk: "#0" },
      ],
    },
    {
      heading: "About Us",
      links: [
        { title: "African Biographies & Memoirs", lnk: "#0" },
        { title: "African Classics", lnk: "#0" },
        { title: "African Art & Poetry", lnk: "#0" },
        { title: "African Proverbs & Parables", lnk: "#0" },
        { title: "African Life", lnk: "#0" },
        { title: "African Culture & Tradition", lnk: "#0" },
        { title: "Planning & Development", lnk: "#0" },
        { title: "Leaders & Notable People", lnk: "#0" },
        { title: "Food & Cooking", lnk: "#0" },
        { title: "Herbs & Medicine", lnk: "#0" },
        { title: "Parenting & Family", lnk: "#0" },
      ],
    },
    {
      heading: "About Us",
      links: [
        {
          title: "About Us",
          lnk: "#0",
        },
        { title: "Careers", lnk: "#0" },
        { title: "Terms & Conditions", lnk: "#0" },
        { title: "Privacy Policy", lnk: "#0" },
        { title: "Help", lnk: "#0" },
      ],
    },
  ];
  const allLinks = (
    <div
      className={clsx(
        "sm:flex mx-5 md:border-r-[1px] border-[#4B4B55]",
        styles["thelinks"]
      )}
    >
      {footerColumns.map((col, i) => (
        <div key={i} className="flex-1">
          <div className="font-semibold font-light py-3">{col.heading}</div>
          <div>
            {col["links"].map((lx, i) => (
              <div className="py-2 font-light">
                {" "}
                <a href={lx.lnk}>{lx.title}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <MainBody>
      <div className={styles.footerLinksWrapper}>
        <div className="border-b-[1px] border-[#4B4B55]">
          <div className="md:flex">
            {allLinks}
            <div
              className={clsx(
                "p-5 md:pl-10 text-sm font-semibold relative w-[200px] md:w-full",
                styles.follow
              )}
            >
              Follow us
              <div className="flex justify-between h-7 mt-2">
                <img src="images/fb.svg" />
                <img src="images/insta.svg" />
                <img src="images/twtr.svg" />
                <img src="images/lin.svg" />
                <img src="images/yt.svg" />
              </div>
              <div className={styles["slum"]}>
                <div className="font-semibold">Secure Payment</div>
                <div className="flex justify-between h-7 mt-2">
                  <img src="images/mtn.svg" />
                  <img src="images/atel.svg" />
                  <img src="images/vza.svg" />
                  <img src="images/master.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className={clsx("font-light flex py-3 pl-5 md:pl-0")}>
            <div className={styles.div1}>
              <span className="text-[11px] font-bold">African Books</span> is a
              marketplace where authors, literary agents, publishers, and other
              Rights Holders can connect with narrators, engineers, recording
              studios, and other Producers capable of producing a finished
              audiobook. The result: More audiobooks will be made.
            </div>
            <div className={clsx("md:pr-48", styles.div2)}></div>
          </div>
        </div>
      </div>
    </MainBody>
  );
};

export { FooterLinks };
