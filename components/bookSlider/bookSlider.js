import React, { useRef, useEffect, useState } from "react";
import styles from "./book-slider.module.css";
import clsx from "clsx";

const BookSlider = ({ sliderBooks }) => {
  if (!sliderBooks) return <></>;
  const outerSliderWidth = useRef(0);
  const totalBks = sliderBooks.length;
  const innerSliderWidth = (120 + 50) * totalBks;
  const slides = sliderBooks.map((book, i) => (
    <div key={i} className={styles["bookSliderBook"]}>
      <img src={book.imgUrl} />
      <div className="py-2 pl-2 pr-1 bg-white">
        <div className="font-medium truncate text-[14px]">{book.title}</div>
        <div className="font-light text-[10px] truncate">{book.author}</div>
        <div className="font-semibold mt-1 mb-3">{book.price}</div>
        <div className="font-light text-[10px]">{book.rating}</div>
      </div>
    </div>
  ));
  const [hiddenPart, setHiddenPart] = useState(null);
  const [translateBy, setTranslateBy] = useState(0);
  const [hideArrow, sethideArrow] = useState(true);
  const sliderMonitor = useRef(0);
  useEffect(() => {
    innerSliderWidth > outerSliderWidth.current.offsetWidth
      ? sethideArrow(false)
      : sethideArrow(true);

    if (!hiddenPart) {
      setHiddenPart(innerSliderWidth - outerSliderWidth.current.offsetWidth);
    }
  }, [innerSliderWidth]);
  const prvFunc = () => {
    if (translateBy === 0) return;
    setTranslateBy((c) => (c -= sliderMonitor.current));
  };
  const nxtFunc = () => {
    const outerSlider = outerSliderWidth.current.offsetWidth;
    const theHiddenPart =
      innerSliderWidth - outerSliderWidth.current.offsetWidth;
    if (theHiddenPart < outerSlider) {
      if (innerSliderWidth < outerSlider || translateBy > theHiddenPart) return;
      setTranslateBy((c) => (c += hiddenPart));
      sliderMonitor.current = hiddenPart;
    } else {
      if (innerSliderWidth < outerSlider || translateBy > theHiddenPart) return;
      setTranslateBy((c) => (c += outerSlider));
      sliderMonitor.current = outerSlider;
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "290px",
        "margin-bottom": "20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: hideArrow ? "center" : "",
      }}
      ref={outerSliderWidth}
    >
      <div
        className={`${styles["prv"]} ${hideArrow && "visibility: hidden"}`}
        onClick={prvFunc}
      ></div>
      <div
        className={`${styles["nxt"]} ${hideArrow && "visibility: hidden"}`}
        onClick={nxtFunc}
      ></div>
      <div
        style={{
          height: "100%",
          width: `${innerSliderWidth}px`,
          transform: `translateX(-${translateBy}px)`,
          transition: "all 0.5s",
          display: "flex",
        }}
      >
        {slides}
      </div>
    </div>
  );
};

export { BookSlider };
