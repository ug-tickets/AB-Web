import React from "react";
import Image from "next/image";

const Rating = ({ value, text, color = "red" }) => {
  let c;
  c = color === "red" ? "r" : "y";
  return (
    <>
      <span>
        {value >= 1 ? (
          <Image src={`/images/${c}sf.svg`} height="14px" width="14px" />
        ) : value >= 0.5 ? (
          <Image src={`/images/${c}sh.svg`} height="14px" width="14px" />
        ) : (
          <Image src={`/images/${c}se.svg`} height="14px" width="14px" />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <Image src={`/images/${c}sf.svg`} height="14px" width="14px" />
        ) : value >= 1.5 ? (
          <Image src={`/images/${c}sh.svg`} height="14px" width="14px" />
        ) : (
          <Image src={`/images/${c}se.svg`} height="14px" width="14px" />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <Image src={`/images/${c}sf.svg`} height="14px" width="14px" />
        ) : value >= 2.5 ? (
          <Image src={`/images/${c}sh.svg`} height="14px" width="14px" />
        ) : (
          <Image src={`/images/${c}se.svg`} height="14px" width="14px" />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <Image src={`/images/${c}sf.svg`} height="14px" width="14px" />
        ) : value >= 3.5 ? (
          <Image src={`/images/${c}sh.svg`} height="14px" width="14px" />
        ) : (
          <Image src={`/images/${c}se.svg`} height="14px" width="14px" />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <Image src={`/images/${c}sf.svg`} height="14px" width="14px" />
        ) : value >= 4.5 ? (
          <Image src={`/images/${c}sh.svg`} height="14px" width="14px" />
        ) : (
          <Image src={`/images/${c}se.svg`} height="14px" width="14px" />
        )}
      </span>
      <span>{text && text}</span>
    </>
  );
};

export { Rating };
