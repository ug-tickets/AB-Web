import React from "react";
import clsx from "clsx";
import styles from "./drop-down.module.css";

const DropDownContent = ({ item, category }) => {
  return category && item.link === category ? (
    <div
      className={clsx(
        "translate-y-0",
        "opacity-0",
        "block",
        "opacity-100",
        "translate-y-3.5",
        styles["dropDownContent"]
      )}
    >
      <div className="flex bg-white border border-gray border-t-0 pl-2.5 text-xs">
        {item.columns.map((col, j) => (
          <div key={j} className="flex-1 py-2.5 px-5">
            {col.rows.map((row, k) => (
              <div key={k} className={styles.dropDownColSection}>
                <div className="font-bold leading-10 pt-2.5 text-left">
                  {row.colHeader}
                </div>
                <ul className="p-0 text-left">
                  {row.subLinks.map((subLnk, l) => (
                    <li className="leading-6 list-none" key={l}>
                      <a href={subLnk.url}>{subLnk.link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        {item.deal && (
          <div
            className="text-left"
            style={{ background: `${item.deal.dealBg}` }}
          >
            <div
              className={clsx(
                "w-full",
                "h-full",
                "text-left",
                "pl-5",
                "pr-5",
                "pt-9",
                "relative",
                styles["dropDownColImg"]
              )}
            >
              <div className="text-black font-bold text-3xl leading-8">
                {item.deal.title}
              </div>
              <div className="text-white font-bold text-3xl leading-10">
                {item.deal.subTitle}
              </div>
              <a href={item.deal.btnUrl}>
                <button className="text-black border border-white py-2.5 px-6 rounded-3xl font-bold uppercase my-2.5 mx-0 bg-transparent font-inherit">
                  {item.deal.btnTxt}
                </button>
              </a>
              <div className="absolute bottom-2.5 w-full h-52 left-0">
                <img
                  className="h-auto w-full"
                  src={item.deal.dealImg}
                  alt="deal_img"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export { DropDownContent };
