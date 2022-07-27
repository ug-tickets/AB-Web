import React from "react";
import { SinglePage } from "../../components/shared/layouts";
import { SingleBook, SingleSideBar } from "../../components/singleBook/index";
import styles from "../../styles/Home.module.css";

const BookDetails = ({ bookDetails }) => {
  return (
    <SinglePage>
      <div className="md:flex py-10">
        <div className={styles.bkDetailsSide}>
          <SingleBook book={bookDetails} />
        </div>
        <div className={styles.sideBar}>
          <SingleSideBar />
        </div>
      </div>
    </SinglePage>
  );
};

export default BookDetails;
export async function getServerSideProps(context) {
  const response = await require("../../eventsdb.json");
  const {
    params: { book_id },
  } = context;
  let requestedBook;
  response.books.every((bk) => {
    if (bk.bookId.toString() === book_id) {
      requestedBook = bk;
      return false;
    }
    return true;
  });
  return {
    props: {
      bookDetails: requestedBook,
    },
  };
}
