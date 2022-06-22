import React from "react";

const SingleSideBar = () => {
  return (
    <div className="pl-5 py-5 font-light">
      <div className="hidden md:block leading-10 text-xs">
        <div className="font-semibold uppercase">Readers also enjoyed</div>
        <div className="flex text-[10px]">
          <div className="flex-1">img</div>
          <div className="flex-1 leading-7 pt-3">
            <div className="font-bold">The Prophet</div>
            <div>Kahil Gibran</div>
            <div>rating</div>
            <div className="font-semibold text-[#257BC7]">$3000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleSideBar };
