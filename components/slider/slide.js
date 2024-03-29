import React from "react";
import styles from "./slide.module.css";
import Link from "next/link";
import { Rating } from "../rating/rating";

const Slide = ({ details }) => {
  return (
    <section
      style={{
        display: "flex",
        flex: "1",
        background: `url(images/moz.svg), url(${details.bookImgBg})`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "contain, cover",
        backgroundPosition: "top, bottom",
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
          <span className="text-lg">${details.price}</span>&nbsp;&nbsp;&nbsp;
          <Rating
            value={details.rating}
            color="y"
            text={` ${details.reviews} reviews`}
          />
        </div>
        <div className="text-xs text-white">Author: {details.author}</div>
        <Link href={`/book/${details.bookId}`}>
          <button className="my-5 bg-white w-48 cursor-pointer rounded-3xl text-black text-center font-normal uppercase">
            View Details
          </button>
        </Link>
      </div>
    </section>
  );
};

export default React.memo(Slide);
