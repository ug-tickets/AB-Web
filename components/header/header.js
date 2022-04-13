import React from "react";
import styles from "./header.module.css";
import clsx from "clsx";

const Header = ({ mainHeader, subHeader }) => {
  const theSubHeader = subHeader.map((item, i) => (
    <>
      {!item.columns ? (
        <div key={i} className="pt-4 flex-1 text-center">
          <a href={item.url}>{item.link}</a>
        </div>
      ) : (
        <div key={i} className={clsx("flex-1", "text-center", styles["dropDown"])} >
          <button
            className={clsx(
              "border-none",
              "cursor-pointer",
              "py-3.5",
              "px-0",
              "relative",
              "bg-transparent",
              styles["dropbtn"]
            )}
          >
            {item.link}
          </button>

          <div className={`${styles.dropDownContent}`}>
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
                  <div className={clsx('w-full', 'h-full', 'text-left', 'pl-5', 'pr-5', 'pt-9', 'relative', styles['dropDownColImg'])}>
                    <div className="text-black font-bold text-3xl leading-8">{item.deal.title}</div>
                    <div className="text-white font-bold text-3xl leading-10">{item.deal.subTitle}</div>
                    <a href={item.deal.btnUrl}>
                      <button className="text-black border border-white py-2.5 px-6 rounded-3xl font-bold uppercase my-2.5 mx-0 bg-transparent font-inherit"
                      >
                        {item.deal.btnTxt}
                      </button>
                    </a>
                    <div className="absolute bottom-2.5 w-full h-52 left-0">
                      <img className="h-auto w-full" src={item.deal.dealImg} alt="deal_img" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
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
