import React from "react";

const SingleReviews = () => {
  return (
    <div>
      <div className="flex border border-b-[#d1d1d1] border-white pb-5 mb-5 pl-2">
        <div className="mr-10 font-semibold">Reader Reviews</div>
        <div>305 Reviews</div>
      </div>
      <div className="flex mb-10">
        <div className="mr-40 pl-2">Rate this book</div>
        <div>
          <button>Write a review</button>
        </div>
      </div>
      <div className="flex mb-7">
        <div className="w-20 border mr-8 ml-2 h-20 rounded-full"></div>
        <div className="flex-1 pt-1">
          <div className="mb-3">
            <span className="font-semibold mr-5">Savannah Nguyen</span> Rated it{" "}
          </div>
          <div className="text-[10px] mb-3">May 20, 2021</div>
          <div className="pr-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </div>

      <div className="flex mb-5">
        <div className="w-20 border mr-8 ml-2 h-20 rounded-full"></div>
        <div className="flex-1 pt-1">
          <div className="mb-3">
            <span className="font-semibold mr-5">Cooper, Kristin</span> Rated it{" "}
          </div>
          <div className="text-[10px] mb-3">May 19, 2021</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleReviews };
