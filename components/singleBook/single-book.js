import React from "react";
import styles from "./single-book.module.css";

const SingleBook = () => {
  return (
    <div className="text-sm font-light">
      <div className="sm:flex flex-start mb-7">
        <div className="w-64 border h-[350px] p-3">book image</div>
        <div className="flex-1 px-3 py-5">
          <div className="flex">
            <div className="flex-1 leading-10">
              <div className="font-bold text-lg">The Prophet</div>
              Author: Kahil Gibran
              <br />
              305 Reviews
              <div className="font-bold">$3,034.00</div>
            </div>
            <div className="flex-2">
              <button className={styles.addToCart}>ADD TO CART</button>
            </div>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
            <br />
          </div>
        </div>
      </div>
      <div className="p-3 mb-10">
        <table>
          <tr>
            <td className="bg-[#E5E5E5] py-1 px-2">
              <div className="border border-b-[#d1d1d1] py-1 px-1">
                {" "}
                Book Title
              </div>
            </td>
            <td className="w-10"></td>
            <td>
              {" "}
              <div className=" border border-b-[#d1d1d1] border-white py-1 px-1">
                {" "}
                The Prophet
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-[#E5E5E5] py-1 px-1 border">
              <div className="border border-b-[#d1d1d1] py-1 px-1"> Author</div>
            </td>
            <td className="w-2"></td>
            <td>
              <div className=" border border-b-[#d1d1d1] border-white py-1 px-1">
                {" "}
                Kahil Gibran
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-[#E5E5E5] py-1 px-1 border">
              <div className="border border-b-[#d1d1d1] py-1 px-1"> ISBN</div>
            </td>
            <td className="w-2"></td>
            <td>
              <div className=" border border-b-[#d1d1d1] border-white py-1 px-1">
                {" "}
                0978364538564
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-[#E5E5E5] py-1 px-1 border">
              <div className="border border-b-[#d1d1d1] py-1 px-1">
                {" "}
                Edition Language
              </div>
            </td>
            <td className="w-2"></td>
            <td>
              <div className=" border border-b-[#d1d1d1] border-white py-1 px-1">
                {" "}
                Luganda and Swahili
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-[#E5E5E5] py-1 px-1 border">
              <div className="border border-b-[#d1d1d1] py-1 px-1">
                {" "}
                Book Format
              </div>
            </td>
            <td className="w-2"></td>
            <td>
              <div className=" border border-b-[#d1d1d1] border-white py-1 px-1">
                {" "}
                eBook, 420 pages
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-[#E5E5E5] py-2 px-2 border">Date Published</td>
            <td className="w-2"></td>
            <td>June 10th 2021 by Publish Media</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export { SingleBook };
