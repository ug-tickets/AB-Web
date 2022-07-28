import React from "react";
import styles from "./single-book.module.css";
import { SingleReviews } from "./singleReviews";
import { cleanMarkup } from "../../helpers";
import Image from "next/image";

const SingleBook = ({ book }) => {
  if (!book) return null;
  const {
    title,
    author,
    price,
    rating,
    reviews,
    imgUrl,
    ISBN,
    language,
    format,
    length,
    publisher,
    datePublished,
    synopsis,
    userReviews,
  } = book;
  return (
    <div className="text-[12px] font-light">
      <div className="sm:flex flex-start mb-7">
        <div className="w-64 border h-[350px] p-3">
          <Image src={imgUrl} height="380px" width="270px" />
        </div>
        <div className="flex-1 px-3 py-3">
          <div className="md:flex">
            <div className="flex-1 leading-10">
              <div className="font-bold text-lg">{title}</div>
              Author: {author}
              <br />
              {userReviews.length > 0 && `${userReviews.length} Reviews`}
              <div className="font-bold">{price}</div>
            </div>
            <div className="flex-2 my-3 md:my-0">
              <button className={styles.addToCart}>ADD TO CART</button>
            </div>
          </div>
          <div dangerouslySetInnerHTML={cleanMarkup(synopsis)}></div>
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
                {title}
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
                {author}
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
                {ISBN}
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
                {language}
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
                {format}, {length} pages
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-[#E5E5E5] py-2 px-2 border">Date Published</td>
            <td className="w-2"></td>
            <td>
              {datePublished} by {publisher}
            </td>
          </tr>
        </table>
      </div>
      <div>
        <SingleReviews userReviews={userReviews} />
      </div>
    </div>
  );
};

export { SingleBook };
