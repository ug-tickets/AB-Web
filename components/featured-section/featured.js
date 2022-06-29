import React from "react";
import styles from "./featured.module.css";
import clsx from "clsx";

const Featured = () => {
  return (
    <div className="flex flex-wrap min-h-[449px] h-auto ml-2">
      <div className="flex-1 mr-3 flex flex-col justify-between min-w-[450px]">
        <div className="text-sm md:text-[30px] mb-5 md:mb-16 mt-14 font-bold">
          Featured Books
        </div>
        <div className="flex bg-white rounded-lg py-0 mb-5">
          <div className={styles["deno"]}>
            <div className=" rounded h-full ml-4 mb-4 mr-1 py-4">
              <div className="w-full h-full border rounded-xl">img</div>
            </div>
          </div>
          <div className={clsx(styles["ivy"], "py-5 pl-4")}>
            <div className="leading-8 font-bold">The Prophet</div>
            <div className="font-light text-[14px] text-[#257BC7]">
              {"African Fiction & Novels"}
            </div>
            <div className="font-medium text-[10px] leading-9">Synopsis</div>
            <div className="text-[9px] pr-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </div>
            <div className="flex my-1 py-1 text-[9px] text-left">
              <div className="border border-r-[#9FA6B9] border-white pr-3">
                <div className="text-[#9FA6B9]">Author</div>
                Kahil Gibran
              </div>
              <div className="px-3 border border-r-[#9FA6B9] border-white">
                <div className="text-[#9FA6B9]">Publisher</div>
                Printea studios
              </div>
              <div className="px-3">
                <div className="text-[#9FA6B9]">Year</div>
                2001
              </div>
            </div>
            <div className="flex justify-between px-3 my-5">
              <div className="text-[#D2232A]">$ 84.78</div>
              <button className="bg-[#D2232A] px-4 py-1 text-xs text-white rounded-[30px]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 min-w-[450px] mt-0 md:mt-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5">
            book1
          </div>
          <div className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5">
            book2
          </div>
          <div className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5">
            book3
          </div>
          <div className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5">
            book4
          </div>
          <div className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5">
            book5
          </div>
          <div className="w-[150px] border h-[220px] rounded-xl mr-5 mb-5">
            book6
          </div>
        </div>
      </div>
    </div>
  );
};

export { Featured };
