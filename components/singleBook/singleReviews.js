import React from "react";
import Image from "next/image";

const SingleReviews = ({ userReviews }) => {
  if (!userReviews) return null;

  return (
    <div>
      <div className="flex border border-b-[#d1d1d1] border-white pb-5 mb-5 pl-2">
        <div className="mr-10 font-semibold">Reader Reviews</div>
        {userReviews.length > 0 && <div>{userReviews.length} Reviews</div>}
      </div>
      <div className="flex mb-10">
        <div className="mr-40 pl-2">Rate this book</div>
        <div>
          <button>Write a review</button>
        </div>
      </div>
      {userReviews.map((rv, idx) => (
        <div className="flex mb-7" key={idx}>
          <div className="w-14 border mr-8 ml-2 h-14 rounded-full overflow-hidden">
            <Image src={rv.thumbImg} width="60px" height="75px" />
          </div>
          <div className="flex-1 pt-1">
            <div className="mb-3">
              <span className="font-semibold mr-5">{rv.name}</span> Rated it{" "}
            </div>
            <div className="text-[10px] mb-3">{rv.date}</div>
            <div className="pr-3">{rv.review}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { SingleReviews };
