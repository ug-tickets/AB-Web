import React from "react";
import { SinglePage } from "../../components/shared/layouts";
import { SingleBook, SingleSideBar } from "../../components/singleBook/index";
import styles from "../../styles/Home.module.css";

const BookDetails = () => {
  return (
    <SinglePage>
      <div className="md:flex py-10">
        <div className={styles.bkDetailsSide}>
          <SingleBook />
        </div>
        <div className={styles.sideBar}>
          <SingleSideBar />
        </div>
      </div>
    </SinglePage>
  );
};

export default BookDetails;
