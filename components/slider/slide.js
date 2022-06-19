import React from "react";
import styles from "./slide.module.css";

const Slide = ({ details }) => {
  return (
    <section
      style={{
        display: "flex",
        flex: "1",
        background: `url(images/moz.svg), url(${details.bookImgBg})`,
        "background-repeat": "repeat, no-repeat",
        backgroundSize: "contain, cover",
        "background-position": "top, bottom",
      }}
    >
      <div className={styles.sliderSnippet}>
        <div className={styles.sliderBookSnippet}>
          <img src={details.bookImg} />
        </div>
      </div>
      <div className={styles.sliderBookPreview}>
        <div className="text-xl text-white">{details.title}</div>
        <div className="text-white">
          <span className="text-lg">${details.price}</span>{" "}
          <span className="text-xs">{`${details.reviews} reviews`}</span>
        </div>
        <div className="text-xs text-white">Author: {details.author}</div>
        <a href={details.bookLnk}>
          <button className="my-5 bg-white w-48 cursor-pointer rounded-3xl text-black text-center font-normal uppercase">
            View Details
          </button>
        </a>
      </div>
    </section>
  );
};

export default React.memo(Slide);
