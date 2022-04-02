import React from "react";
import styles from "./header.module.css";

const Header = () => {
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
        <div className={styles.navBar}>
          <div className={styles.topLink}>
            <a href="#0">Home</a>
          </div>

          <div className={`${styles.dropDown}`}>
            <button className={`${styles.dropbtn} ${styles.toggleable}`}>
              Categories
            </button>

            <div className={`${styles.dropDownContent}`}>
              <div className={styles.dropDownRow}>
                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Biographies & Memories"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Biographies & Memories"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Children's"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Children's"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Top Authors"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"West Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"South Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"East Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"East Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>

                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Popular Features"}</div>
                    <ul>
                      <li>
                        <a href="#">{"New Releases"}</a>
                      </li>
                      <li>
                        <a href="#">{"Best Books Ever"}</a>
                      </li>
                      <li>
                        <a href="#">{"Book Club Classics"}</a>
                      </li>
                      <li>
                        <a href="#">{"Our Bookmarks"}</a>
                      </li>
                      <li>
                        <a href="#">{"Bargain Shop"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Best Selling Books"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"With the fire on High"}</a>
                      </li>
                      <li>
                        <a href="#">{"Moby Dick or the White Whale"}</a>
                      </li>
                      <li>
                        <a href="#">{"Project Hail Mary"}</a>
                      </li>
                      <li>
                        <a href="#">{"Ancient Art of Psychological Warfare"}</a>
                      </li>
                      <li>
                        <a href="#">{"Jerusalem: A Cookbook"}</a>
                      </li>
                      <li>
                        <a href="#">{"View All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColImg}>
                    <div>Deals</div>
                    <div>eBooks</div>
                    <button>Shop Now</button>
                    <div className={styles.dealImg}>
                      <img src="images/deal.png" alt="deal_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.dropDown}`}>
            <button className={`${styles.dropbtn} ${styles.toggleable}`}>
              eBooks
              <i className="caret-down"></i>
            </button>

            <div className={`${styles.dropDownContent}`}>
              <div className={styles.dropDownRow}>
                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Biographies & Memories"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Biographies & Memories"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Children's"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Children's"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Top Authors"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"West Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"South Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"East Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"West Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"South Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"East Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"West Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"South Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"East Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Popular Features"}</div>
                    <ul>
                      <li>
                        <a href="#">{"New Releases"}</a>
                      </li>
                      <li>
                        <a href="#">{"Best Books Ever"}</a>
                      </li>
                      <li>
                        <a href="#">{"Book Club Classics"}</a>
                      </li>
                      <li>
                        <a href="#">{"Our Bookmarks"}</a>
                      </li>
                      <li>
                        <a href="#">{"Bargain Shop"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Best Selling Books"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"With the fire on High"}</a>
                      </li>
                      <li>
                        <a href="#">{"Moby Dick or the White Whale"}</a>
                      </li>
                      <li>
                        <a href="#">{"Project Hail Mary"}</a>
                      </li>
                      <li>
                        <a href="#">{"Ancient Art of Psychological Warfare"}</a>
                      </li>
                      <li>
                        <a href="#">{"Jerusalem: A Cookbook"}</a>
                      </li>
                      <li>
                        <a href="#">{"View All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColImg}>
                    <div>Deals</div>
                    <div>eBooks</div>
                    <button>Shop Now</button>
                    <div className={styles.dealImg}>
                      <img src="images/deal.png" alt="deal_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.dropDown}`}>
            <button className={`${styles.dropbtn} ${styles.toggleable}`}>
              Audiobooks
              <i className="caret-down"></i>
            </button>

            <div className={`${styles.dropDownContent}`}>
              <div className={styles.dropDownRow}>
                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Biographies & Memories"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Biographies & Memories"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Children's"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Children's"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Arts & Literature"}</a>
                      </li>
                      <li>
                        <a href="#">{"Cultural"}</a>
                      </li>
                      <li>
                        <a href="#">{"Pan African"}</a>
                      </li>
                      <li>
                        <a href="#">{"Historical"}</a>
                      </li>
                      <li>
                        <a href="#">{"Leadership & Notable People"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Top Authors"}</div>
                    <ul>
                      <li>
                        <a href="#">{"Central Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"West Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"South Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"East Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"North Africa"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>{"Popular Features"}</div>
                    <ul>
                      <li>
                        <a href="#">{"New Releases"}</a>
                      </li>
                      <li>
                        <a href="#">{"Best Books Ever"}</a>
                      </li>
                      <li>
                        <a href="#">{"Book Club Classics"}</a>
                      </li>
                      <li>
                        <a href="#">{"Our Bookmarks"}</a>
                      </li>
                      <li>
                        <a href="#">{"Bargain Shop"}</a>
                      </li>
                      <li>
                        <a href="#">{"Shop All"}</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.dropDownColSection}>
                    <div className={styles.colHeader}>
                      {"Best Selling Books"}
                    </div>
                    <ul>
                      <li>
                        <a href="#">{"With the fire on High"}</a>
                      </li>
                      <li>
                        <a href="#">{"Moby Dick or the White Whale"}</a>
                      </li>
                      <li>
                        <a href="#">{"Project Hail Mary"}</a>
                      </li>
                      <li>
                        <a href="#">{"Ancient Art of Psychological Warfare"}</a>
                      </li>
                      <li>
                        <a href="#">{"Jerusalem: A Cookbook"}</a>
                      </li>
                      <li>
                        <a href="#">{"View All"}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.dropDownCol}>
                  <div className={styles.dropDownColImg}>
                    <div>Deals</div>
                    <div>eBooks</div>
                    <button>Shop Now</button>
                    <div className={styles.dealImg}>
                      <img src="images/deal.png" alt="deal_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.topLink}>
            <a href="#0">Shop</a>
          </div>

          <div className={styles.topLink}>
            <a href="#0">Features</a>
          </div>

          <div className={styles.topLink}>
            <a href="#0">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
