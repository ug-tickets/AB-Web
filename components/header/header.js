import React, { useState } from "react";
import styles from "./header.module.css";
import clsx from "clsx";
import { DropDownContent } from "./drop-down-content";

const Header = ({ mainHeader, subHeader }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const renderDropDown = (e) => {
    setCurrentCategory(e.target.dataset.category);
    setShowDropDown(true);
  };
  const theSubHeader = subHeader.map((item, i) => (
    <>
      {!item.columns ? (
        <div key={i} className="h-11 pt-3 flex-1 text-center">
          <a href={item.url}>{item.link}</a>
        </div>
      ) : (
        <div
          key={i}
          className={clsx(
            "flex-1",
            "text-center",
            "mx-3",
            "cursor-pointer",
            styles["dropDown"]
          )}
          data-category={item.link}
          onClick={(e) => renderDropDown(e)}
          onMouseEnter={(e) => renderDropDown(e)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <button
            className={clsx(
              "cursor-pointer",
              "mt-2.5",
              "p-0",
              "relative",
              "box-boarder",
              "border-none",
              "bg-transparent",
              styles["dropbtn"]
            )}
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
          <div className={styles.logo}>Logo</div>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search book by author or publisher"
              className={styles.input}
            />
          </div>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.login}>LogIn</div>
          <div className={styles.cart}>Cart</div>
        </div>
      </div>

      <div className="w-full relative bg-regal-gray">
        <div className="max-w-4xl my-0 mx-auto overflow-hidden flex z-10 text-sm">
          {theSubHeader}
        </div>
      </div>
    </>
  );
};

export { Header };
