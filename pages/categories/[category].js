import React, { useState, useEffect } from "react";
import { Rating } from "../../components/rating";
import Link from "next/link";
import { SinglePage } from "../../components/shared/layouts";

const Categories = ({ category, books }) => {
  if (!books) return null;
  const [orientation, setOrientation] = useState("col");
  const bg = orientation === "col" ? "#E5E5E5" : "white";
  useEffect(() => {
    document.body.style.backgroundColor = bg;
    return () => (document.body.style.backgroundColor = "white");
  }, [orientation]);
  const changeOrientation = (or) => {
    setOrientation(or);
  };
  return (
    <SinglePage>
      <div className="pt-28 pb-16">
        <div className="flex my-5 justify-end">
          <div
            className="border w-[40px] h-[30px] mr-3 cursor-pointer"
            onClick={() => changeOrientation("col")}
          >
            col
          </div>
          <div
            className="border w-[40px] h-[30px] mr-3 cursor-pointer"
            onClick={() => changeOrientation("row")}
          >
            Row
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center overflow-hidden"
          style={{
            transition: "all 0.5s",
          }}
        >
          {books.map((bk, key) => (
            <div
              style={{
                width: orientation === "col" ? "160px" : "100%",
                height: orientation === "col" ? "320px" : "auto",
                marginRight: "8px",
                marginLeft: "8px",
                marginBottom: "20px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                overflow: "hidden",
                flexDirection: orientation === "col" ? "column" : "row",
              }}
              key={key}
            >
              <Link href={`/book/${bk.bookId}`}>
                <div
                  style={{
                    width: orientation === "col" ? "100%" : "160px",
                    height: orientation === "col" ? "224px" : "200px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img src={bk.imgUrl} className="w-full h-full" />
                </div>
              </Link>
              <div
                style={{
                  width: orientation === "col" ? "100%" : "100%",
                  height: orientation === "col" ? "96px" : "100%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: orientation === "col" ? "column" : "row",
                    flexWrap: "wrap",
                    background: "white",
                    lineHeight: orientation === "col" ? "22px" : "27px",
                    paddingLeft: orientation === "col" ? "15px" : "20px",
                    paddingRight: orientation == "col" ? "5px" : "10px",
                    paddingTop: orientation === "col" ? "0px" : "10px",
                    paddingBottom: orientation == "col" ? "0px" : "10px",
                    overflow: "hidden",
                    display: "block",
                    display: orientation == "col" ? "" : "flex",
                    transition: "all 0.5s",
                  }}
                >
                  <div
                    className="font-bold border border-[white] truncate flex-1"
                    style={{
                      "font-size": orientation === "col" ? "12px" : "18px",
                    }}
                  >
                    {bk.title}
                  </div>
                  <div
                    className="font-light text-[10px] truncate flex-1"
                    style={{
                      display: orientation == "col" ? "block" : "none",
                    }}
                  >
                    {bk.author}
                  </div>
                  <div
                    style={{
                      "font-weight": "bold",
                      "font-size": "11px",
                      color: "#D2232A",
                      display: orientation == "col" ? "block" : "none",
                    }}
                  >
                    {bk.price}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: "1",
                      justifyContent: orientation === "col" ? "left" : "right",
                    }}
                  >
                    <Rating
                      value={bk.rating}
                      color={orientation === "col" ? "red" : "y"}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: orientation == "col" ? "none" : "block",
                    }}
                  >
                    <div className="font-light text-[12px] text-[#257BC7]">
                      African Fiction & Novels
                    </div>
                    <div
                      className="text-[12px] font-light"
                      style={{ lineHeight: "15px" }}
                    >
                      {bk.synopsis}
                    </div>
                    <div className="text-[#D2232A] my-1 font-semibold">
                      {bk.price}
                    </div>
                    <div className="flex">
                      <div
                        className="flex text-[9px]"
                        style={{ flex: 2, lineHeight: "14px" }}
                      >
                        <div className="flex-1 text-[#9FA6B9]">
                          Author
                          <div className="text-[#000]">{bk.author}</div>
                        </div>{" "}
                        <div className="flex-1 px-2 text-[#9FA6B9]">
                          Publisher
                          <div className="text-[#000]">{bk.publisher}</div>
                        </div>{" "}
                        <div className="flex-1 px-2 text-[#9FA6B9]">
                          Year
                          <div className="text-[#000]">{bk.datePublished}</div>
                        </div>
                      </div>
                      <div
                        className="flex"
                        style={{ flex: 1, justifyContent: "right" }}
                      >
                        <div className="py-1 w-[170px] text-center cursor-pointer font-semibold text-[12px] text-white bg-[#D2232A]">
                          Add to cart
                        </div>
                        <div className="w-[35px] border ml-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SinglePage>
  );
};

export default Categories;
export async function getServerSideProps(context) {
  const response = await require("../../eventsdb.json");
  const { books } = response;
  const {
    params: { category },
  } = context;

  return {
    props: {
      category,
      books,
    },
  };
}
