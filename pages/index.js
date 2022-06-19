import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header";
import { Slider } from "../components/slider";
import { MainBody } from "../components/shared/main-body";
import { Headings } from "../components/shared/headings";
import { Footer } from "../components/footer";
import { BookSlider } from "../components/bookSlider";

export default function Home() {
  const headerOptions1 = {
    heading: "Featured Categories",
    allLinkUrl: "/categories/book",
    linkTxt: "All Categories",
  };
  const headerOptions2 = {
    heading: "Best Selling Books Ever",
    allLinkUrl: "/categories/book",
    linkTxt: "View All",
  };
  const headerOptions3 = {
    heading: "Featured This Week",
    allLinkUrl: "/categories/book",
    linkTxt: "View All",
  };
  const sliderBooks = [
    {
      title: "The Haunter Of The Dark",
      author: "H.P Lovercraft",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/haunter.jpeg",
    },
    {
      title: "The Haunter Of The Dark",
      author: "H.P Lovercraft",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/poetics.jpeg",
    },
    {
      title: "The Prophet",
      author: "Kahlil Gibran",
      price: "$25",
      rating: "4.05",
      imgUrl: "images/prophet.jpeg",
    },
    {
      title: "The Invisible Giant",
      author: "Bram Stoker",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/slide2.jpeg",
    },
    {
      title: "The Haunter Of The Dark",
      author: "H.P Lovercraft",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/slide3.jpeg",
    },
    {
      title: "The Arrow",
      author: "Sumita Chakhaborty",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/arrow.jpeg",
    },
    {
      title: "Thinking",
      author: "Daniel Kahneman",
      price: "$10",
      rating: "4.05",
      imgUrl: "images/thinking.jpeg",
    },
    {
      title: "The Invisible Giant",
      author: "Bram Stoker",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/slide2.jpeg",
    },
    {
      title: "The Prophet",
      author: "Kahlil Gibran",
      price: "$25",
      rating: "4.05",
      imgUrl: "images/prophet.jpeg",
    },
  ];

  return (
    <div>
      <Head>
        <title>AB SITE</title>
        <meta name="description" content="African books site" />
        <meta name="handheldfriendly" content="true" />
        <meta name="mobileoptimized" content="240" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicomn.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Slider />
          <div className="w-full py-3">
            <MainBody>
              <Headings options={headerOptions1} />
              <div className="flex flex-wrap justify-center pl-[3%]">
                <div className="w-32 md:flex-1 bg-[#99E6FC] bg-opacity-[0.09] h-24">
                  <div className="h-16 text-center">
                    <div className="pt-7 pl-1 flex justify-center">
                      <img src="images/mystery.svg" className="w-9 h-9" />
                    </div>
                  </div>
                  <div className="py-3 text-center text-[10px]">Mystery</div>
                </div>
                <div className="w-32 md:flex-1 bg-[#040404] bg-opacity-[0.09] h-24">
                  <div className="h-16 text-center">
                    <div className="pt-7 pl-1 flex justify-center">
                      <img src="images/inspiration.svg" className="w-9 h-9" />
                    </div>{" "}
                  </div>
                  <div className="py-3 text-center text-[10px]">
                    Inspiration
                  </div>
                </div>
                <div className="w-32 md:flex-1 bg-[#DF646E] bg-opacity-[0.09] h-24">
                  <div className="h-16 text-center">
                    <div className="pt-7 pl-1 flex justify-center">
                      <img
                        src="images/adventure-game.svg"
                        className="w-9 h-9"
                      />
                    </div>{" "}
                  </div>
                  <div className="py-3 text-center text-[10px]">Poetry</div>
                </div>
                <div className="w-32 md:flex-1 bg-[#470082] bg-opacity-[0.09] h-24">
                  <div className="h-16 text-center">
                    <div className="pt-7 pl-1 flex justify-center">
                      <img src="images/christian.svg" className="w-9 h-9" />
                    </div>{" "}
                  </div>
                  <div className="py-3 text-center text-[10px]">Christian</div>
                </div>
                <div className="w-32 md:flex-1 bg-[#FFD064] bg-opacity-[0.09] h-24">
                  <div className="h-16 text-center">
                    {" "}
                    <div className="pt-7 pl-1 flex justify-center">
                      <img src="images/parchment.svg" className="w-9 h-9" />
                    </div>
                  </div>
                  <div className="py-3 text-center text-[10px]">Historical</div>
                </div>
                <div className="w-32 md:flex-1 bg-[#FF3E61] bg-opacity-[0.09] h-24">
                  <div className="h-16 text-center">
                    {" "}
                    <div className="pt-7 pl-1 flex justify-center">
                      <img src="images/hearts.svg" className="w-9 h-9" />
                    </div>
                  </div>
                  <div className="py-3 text-center text-[10px]">Romance</div>
                </div>
              </div>
            </MainBody>
          </div>
          <div className="w-full pb-0 pt-[2px]">
            <MainBody>
              <Headings options={headerOptions2} />
              <BookSlider sliderBooks={sliderBooks} />
            </MainBody>
          </div>
          <div className="w-full bg-[#E5E5E5] bg-opacity-[0.5] pb-5 pt-[2px]">
            <MainBody>
              <Headings options={headerOptions3} />
              <BookSlider sliderBooks={sliderBooks} />
            </MainBody>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
