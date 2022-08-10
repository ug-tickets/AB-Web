import React, { useState } from "react";
import styles from "./featured.module.css";
import clsx from "clsx";

const Featured = ({ featuredBooks }) => {
  if (!featuredBooks) return <></>;

  const [currentBook, setCurrentBook] = useState(0);
  const firstBook = featuredBooks[currentBook];
  function switchBooks(index) {
    setCurrentBook(index);
  }
  return (
    <div className="flex flex-wrap min-h-[449px] h-auto ml-2 py-5">
      <div className="flex-1 mr-3 flex flex-col justify-between min-w-[450px]">
        <div className="text-sm md:text-[30px] mb-5 md:mb-16 mt-14 font-bold">
          Featured Books
        </div>
        <div className="flex bg-white rounded-lg py-0 mb-5">
          <div className={styles["deno"]}>
            <div className=" rounded h-full ml-4 mb-4 mr-1 py-4">
              <div className="w-full h-full border rounded-xl overflow-hidden">
                <img className="h-full w-full" src={firstBook.imgUrl} />
              </div>
            </div>
          </div>
          <div
            className={clsx(styles["ivy"], "py-5 pl-4 pr-2 overflow-hidden")}
          >
            <div className="leading-8 font-bold truncate ">
              {firstBook.title}
            </div>
            <div className="font-light text-[14px] text-[#257BC7]">
              {" "}
              {firstBook.category}{" "}
            </div>
            <div className="font-medium text-[10px] leading-9">Synopsis</div>
            <div className="text-[9px] pr-1">{firstBook.synopsis}</div>
            <div className="flex my-1 py-1 text-[9px] text-left">
              <div className="border border-r-[#9FA6B9] border-white pr-3">
                <div className="text-[#9FA6B9]">Author</div>
                {firstBook.author}
              </div>
              <div className="px-3 border border-r-[#9FA6B9] border-white">
                <div className="text-[#9FA6B9]">Publisher</div>
                {firstBook.publisher}
              </div>
              <div className="px-3">
                <div className="text-[#9FA6B9]">Year</div>
                {firstBook.year}
              </div>
            </div>
            <div className="flex justify-between px-3 my-5">
              <div className="text-[#D2232A] font-bold">
                $ {firstBook.price}
              </div>
              <button className="bg-[#D2232A] px-4 py-1 text-xs text-white rounded-[30px]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 min-w-[450px] mt-0 md:mt-6">
        <div className="flex flex-wrap justify-center">
          {featuredBooks.map((item, ix) => {
            if (ix !== currentBook)
              return (
                <div
                  className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5 overflow-hidden cursor-pointer"
                  key={ix}
                  onClick={() => switchBooks(ix)}
                >
                  <img className="h-full w-full" src={item.imgUrl} />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export { Featured };
