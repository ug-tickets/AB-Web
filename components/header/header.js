import React from "react";
import styles from "./header.module.css";

const Header = ({ mainHeader, subHeader }) => {
  const theSubHeader = subHeader.map((item, i) => (
    <>
      {!item.columns ? (
        <div key={i} className={styles.topLink}>
          <a href={item.url}>{item.link}</a>
        </div>
      ) : (
        <div className={`${styles.dropDown}`}>
          <button className={`${styles.dropbtn} ${styles.toggleable}`}>
            {item.link}
          </button>

          <div className={`${styles.dropDownContent}`}>
            <div className={styles.dropDownRow}>
              {item.columns.map((col, j) => (
                <div key={j} className={styles.dropDownCol}>
                  {col.rows.map((row, k) => (
                    <div key={k} className={styles.dropDownColSection}>
                      <div className={styles.colHeader}>{row.colHeader}</div>
                      <ul>
                        {row.subLinks.map((subLnk, l) => (
                          <li key={l}>
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
                  className={styles.dropDownCol}
                  style={{ background: `${item.deal.dealBg}` }}
                >
                  <div className={styles.dropDownColImg}>
                    <div>{item.deal.title}</div>
                    <div>{item.deal.subTitle}</div>
                    <a href={item.deal.btnUrl}>
                      <button>{item.deal.btnTxt}</button>
                    </a>
                    <div className={styles.dealImg}>
                      <img src={item.deal.dealImg} alt="deal_img" />
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
    <div>
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

      <div className={styles.subHeader}>
        <div className={styles.navBar}>{theSubHeader}</div>
      </div>
    </div>
  );
};

export { Header };
