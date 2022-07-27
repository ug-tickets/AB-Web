import React, { useState, useMemo } from "react";
import styles from "./slider.module.css";
import Slide from "./slide";
import clsx from "clsx";

const Slider = () => {
  const sliderImagesArr = [
    {
      title: "Three Men In A Boat",
      price: "19.9",
      reviews: "1,368",
      author: "Jerome K, Jerome",
      bookLnk: "",
      bookImg: "images/slide1.jpeg",
      bookImgBg: "images/slide1bg.jpeg",
    },
    {
      title: "The Invisible Giant",
      price: "16",
      reviews: "1,888",
      author: "Bram Stoker",
      bookLnk: "",
      bookImg: "images/slide2.jpeg",
      bookImgBg: "images/slide2bg.jpeg",
    },
    {
      title: "It Was Never Going To Be Okay",
      price: "15",
      reviews: "1,500",
      author: "Jaye Simpson",
      bookLnk: "",
      bookImg: "images/slide3.jpeg",
      bookImgBg: "images/slide3bg.jpeg",
    },
    {
      title: "In The Company Of Ghosts",
      price: "10",
      reviews: "1,000",
      author: "Andrew Author",
      bookLnk: "",
      bookImg: "images/slide4.jpeg",
      bookImgBg: "images/slide4bg.jpeg",
    },
  ];
  const ImagesArr = useMemo(() => sliderImagesArr, []);
  const transformBy = 100 / ImagesArr.length;
  const [count, setCount] = useState(transformBy);
  const prev = () => {
    if (count === 0) return;
    setCount((c) => (c -= transformBy));
  };
  const nex = () => {
    if (count === 100 - transformBy) return;
    setCount((c) => (c += transformBy));
  };
  const allSlidesWidth = `${100 * ImagesArr.length}`;
  return (
    <div className={styles.carousel}>
      <div className={clsx("h-full", "w-full", "md:w-[70%]", styles["slider"])}>
        <div className={styles.prev} onClick={prev}></div>
        <div className={styles.next} onClick={nex}></div>
        <div
          style={{
            display: "flex",
            height: "100%",
            width: `${allSlidesWidth}%`,
            transform: `translateX(-${count}%)`,
            transition: "all 0.5s",
          }}
        >
          {ImagesArr.map((s) => (
            <Slide details={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Slider };
