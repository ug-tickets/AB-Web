import React from "react";
import styles from "./footer-deals.module.css";

const FooterDeals = () => {
  // assume these  are coming in as props
  const sold = 7;
  const remain = 10;
  const progress = (sold / (sold + remain)) * 100;
  return (
    <div className="md:flex flex-wrap h-auto px-5 align-center justify-center md:px-[0%]">
      <div className="md:py-10 py-3 leading-5 w-[300px]">
        <div className="text-[10px] uppercase my-3">
          Hurry before offer ends
        </div>
        <div className="text-3xl my-1">
          Limited Week <div className="font-semibold my-2">Deal</div>
        </div>
        <div className="my-5 py-2 bg-white w-48 cursor-pointer rounded-3xl text-black text-center text-[10px] font-normal uppercase">
          View Details
        </div>
      </div>
      <div className="md:px-5 md:py-5 w-[300px]">
        <div className={styles["footer-deal-img"]}>
          <img src="images/boundless.jpeg" />
          <div className={styles["sale-tag"]}>
            <span className="font-light text-[10px]">Save</span>
            <div className="font-medium text-lg">$48</div>
          </div>
        </div>
      </div>
      <div className="md:py-10 py-5 font-light w-[300px] text-[11px]">
        <div className="mb-4 md:mt-6">
          <span className="font-medium text-2xl">$15</span> &nbsp;
          <span className="font-medium">$77.96</span>
        </div>
        <div className="mb-4 font-medium">Hurry up! Offer ends in:</div>
        <div className="mb-5">
          <span className="font-medium mr-1">114</span> Days
          <span className="font-medium ml-4 mr-1">03</span> Hours{" "}
          <span className="font-medium ml-4 mr-1">24</span> Mins{" "}
          <span className="font-medium ml-4 mr-1">25</span> Secs
        </div>
        <div>
          <div className="flex justify-between py-1 px-1 font-medium">
            <div>{`Already Sold: ${sold}`}</div>{" "}
            <div>{`Available: ${remain}`}</div>
          </div>
          <div className="w-full h-2 mb-3 bg-white rounded-lg">
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "#24F847",
                "border-radius": "40px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterDeals };
