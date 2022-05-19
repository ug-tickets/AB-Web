import React, { useState } from "react";
import styles from "./slider.module.css";
import clsx from "clsx";
import { Slide } from "./slide";

const Slider = () => {
  const sliderImagesArr = [
    {
      title: "Three Men In A Boat",
      price: "19.9",
      reviews: "1,368",
      author: "Jerome K, Jerome",
      bookLnk: "",
      bookImg: "images/slide1.jpeg",
    },
    {
      title: "The Invisible Giant",
      price: "16",
      reviews: "1,888",
      author: "Bram Stoker",
      bookLnk: "",
      bookImg: "images/slide2.jpeg",
    },
    {
      title: "It Was Never Going To Be Okay",
      price: "15",
      reviews: "1,500",
      author: "Jaye Simpson",
      bookLnk: "",
      bookImg: "images/slide3.jpeg",
    },
    {
      title: "In The Company Of Ghosts",
      price: "10",
      reviews: "1,000",
      author: "Andrew Author",
      bookLnk: "",
      bookImg: "images/slide4.jpeg",
    },
  ];
  const transformBy = 100 / sliderImagesArr.length;
  const [count, setCount] = useState(transformBy);
  const prev = () => {
    if (count === 0) return;
    setCount((c) => (c -= transformBy));
  };
  const nex = () => {
    if (count >= 100 - transformBy) return;
    setCount((c) => (c += transformBy));
  };
  const allSlidesWidth = `${100 * sliderImagesArr.length}`;
  return (
    <div className={styles.carousel}>
      <div className={styles.prev} onClick={prev}></div>
      <div className={styles.next} onClick={nex}></div>
      <div className={styles.slider}>
        <div
          className={clsx(
            "flex",
            "h-full",
            `w-[${allSlidesWidth}%]`,
            `transform -translate-x-[${count}%]`,
            styles["sectionWrapper"]
          )}
        >
          {sliderImagesArr.map((s) => (
            <Slide details={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Slider };
