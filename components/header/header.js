import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import clsx from "clsx";
import { DropDownContent } from "./drop-down-content";
import Image from "next/image";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [subHeader, setSubHeader] = useState(null);

  useEffect(() => {
    (async () => {
      const { Header } = require("./db.json");
      setSubHeader(Header.subHeader);
    })();
  }, []);

  const renderDropDown = (e) => {
    setCurrentCategory(e.target.dataset.category);
    setShowDropDown(true);
  };
  const theSubHeader =
    subHeader &&
    subHeader.map((item, i) => (
      <>
        {!item.columns ? (
          <div key={i} className="h-11 pt-3 flex-1 lg:text-center">
            <a href={item.url}>{item.link}</a>
          </div>
        ) : (
          <div
            key={i}
            className={clsx(
              "flex-1",
              "md:mx-3",
              "pb-3",
              "md:p-0",
              "lg:text-center",
              "cursor-pointer",
              styles["dropDown"]
            )}
            data-category={item.link}
            onMouseEnter={(e) => renderDropDown(e)}
            onMouseLeave={() => setShowDropDown(false)}
          >
            <button
              className={clsx(
                "cursor-pointer",
                "mt-3",
                "p-0",
                "relative",
                "box-boarder",
                "text-left",
                "w-11/12",
                "md:w-auto",
                "border-none",
                "bg-transparent",
                styles["dropbtn"]
              )}
              data-category={item.link}
              onClick={(e) => renderDropDown(e)}
            >
              {item.link}
            </button>
            {showDropDown && (
              <DropDownContent item={item} category={currentCategory} />
            )}
          </div>
        )}
      </>
    ));
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={clsx("w-[510px]", "sm:w-[250px]", styles["logo"])}>
            <Image src="/images/logo.svg" width="135px" height="35px" />
          </div>
          <div className={clsx("hidden", "sm:block", styles["searchBar"])}>
            <span className="relative">
              <input
                type="text"
                placeholder="Search book by author or publisher"
                className={styles.input}
              />
              <div className={styles.searchico}>
                <Image src="/images/search.svg" width="25px" height="24px" />
              </div>
            </span>
          </div>
          <div className={styles.login}>
            <Image src="/images/acc.svg" width="21px" height="15px" />
          </div>
          <div className={styles.cart}>
            <Image src="/images/cart.png" width="17px" height="12px" />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "w-full",
          "relative",
          "bg-regal-gray",
          "pl-2",
          "pb-4",
          "lg:pb-0",
          "lg:pl-0"
        )}
      >
        <div className="w-full lg:max-w-4xl my-0 mx-auto overflow-hidden md:flex z-10 text-sm">
          {theSubHeader}
        </div>
      </div>
    </>
  );
};

export { Header };
