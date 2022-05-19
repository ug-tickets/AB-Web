import React from "react";
import styles from "./slide.module.css";

const Slide = ({ details }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sliderSnippet}>
        <div className={styles.sliderBookSnippet}>
          <img src={details.bookImg} />
        </div>
      </div>
      <div className={styles.sliderBookPreview}>
        <div>{details.title}</div>
        <div>${`${details.price} ${details.reviews} reviews`}</div>
        <div>Author: {details.author}</div>
        <a href={details.bookLnk}>
          <button>View Details</button>
        </a>
      </div>
    </section>
  );
};

export { Slide };
