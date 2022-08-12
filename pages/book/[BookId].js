import React from "react";
import { SinglePage } from "../../components/shared/layouts";
import { SingleBook, SingleSideBar } from "../../components/singleBook/index";
import styles from "../../styles/Home.module.css";

const BookDetails = ({ bookDetails, crossSales }) => {
  return (
    <SinglePage>
      <div className="md:flex py-40">
        <div className={styles.bkDetailsSide}>
          <SingleBook book={bookDetails} />
        </div>
        <div className={styles.sideBar}>
          <SingleSideBar crossSales={crossSales} />
        </div>
      </div>
    </SinglePage>
  );
};

export default BookDetails;
export async function getServerSideProps(context) {
  const response = await require("../../eventsdb.json");
  const {
    params: { BookId },
  } = context;
  let requestedBook;
  const crossSales;
  response.books.every((bk) => {
    if (bk.bookId.toString() === BookId) {
      requestedBook = bk;
      return false;
    }
    return true;
  });
  crossSales = response.books.filter((bk) => bk.bookId.toString() !== BookId);
  return {
    props: {
      bookDetails: requestedBook,
      crossSales,
    },
  };
}
