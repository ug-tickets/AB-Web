import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header";
import { Slider } from "../components/slider";
import { MainBody } from "../components/shared/main-body";
import { Headings } from "../components/shared/headings";
import { Footer } from "../components/footer";
import { BookSlider } from "../components/bookSlider";
import { Featured } from "../components/featured-section";

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
      bookId: 1,
    },
    {
      title: "The Widow Seat",
      author: "Aminatta Forna",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/aminatta.jpeg",
      bookId: 2,
    },
    {
      title: "The Prophet",
      author: "Kahlil Gibran",
      price: "$25",
      rating: "4.05",
      imgUrl: "images/prophet.jpeg",
      bookId: 3,
    },
    {
      title: "A Girl Is A Body Of Water",
      author: "Bram Stoker",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/agirl.jpeg",
      bookId: 4,
    },
    {
      title: "The Haunter Of The Dark",
      author: "H.P Lovercraft",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/slide3.jpeg",
      bookId: 5,
    },
    {
      title: "The Arrow",
      author: "Sumita Chakhaborty",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/arrow.jpeg",
      bookId: 6,
    },
    {
      title: "Thinking",
      author: "Daniel Kahneman",
      price: "$10",
      rating: "4.05",
      imgUrl: "images/thinking.jpeg",
      bookId: 7,
    },
    {
      title: "How Beautiful We Were",
      author: "Imbolo Mbue",
      price: "$20",
      rating: "4.05",
      imgUrl: "images/howbeautiful.jpg",
      bookId: 8,
    },
    {
      title: "Foreign Gods Inc",
      author: "Okey Ndibe",
      price: "$25",
      rating: "4.05",
      imgUrl: "images/foreigngods.jpeg",
      bookId: 9,
    },
  ];
  const featuredBooks = [
    {
      title: "The Haunter Of The Dark",
      category: "African Fiction & Novels",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Kahil Gibran",
      publisher: "Printea studios",
      year: 2001,
      imgUrl: "images/haunter.jpeg",
      price: 84.78,
    },
    {
      title: "A Girl Is A Body Of Water",
      category: "Christian Classics",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Jennifer Nansubuga Makumbi",
      publisher: "Printea studios",
      year: 1998,
      imgUrl: "images/agirl.jpeg",
      price: 84.78,
    },
    {
      title: "The  Widow Seat",
      category: "African Fiction & Novels",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Aminatta Forna",
      publisher: "Printea studios",
      year: 2000,
      imgUrl: "images/aminatta.jpeg",
      price: 84.78,
    },
    {
      title: "Foreign Gods Inc",
      category: "African Fiction & Novels",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Okey Ndibe",
      publisher: "Printea studios",
      year: 2001,
      imgUrl: "images/foreigngods.jpeg",
      price: 84.78,
    },
    {
      title: "How Beautiful We Were",
      category: "African Fiction & Novels",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Imbolo Mbue",
      publisher: "Printea studios",
      year: 2001,
      imgUrl: "images/howbeautiful.jpg",
      price: 84.78,
    },
    {
      title: "The Water House",
      category: "African Fiction & Novels",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Antonio Olinto",
      publisher: "Printea studios",
      year: 2001,
      imgUrl: "images/waterhouse.jpeg",
      price: 40.78,
    },
    {
      title: "In the company of Ghosts",
      category: "African Fiction & Novels",
      synopsis: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
      author: "Kahil Gibran",
      publisher: "Printea studios",
      year: 2001,
      imgUrl: "images/slide4.jpeg",
      price: 50,
    },
  ];
  const footerDeal = {
    sold: 7,
    total: 17,
    bookImg: "/images/boundless.jpeg",
    bookId: 6,
    price: 20,
    saleEnd: "20-10-2022",
    discount: 5,
  };

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
          <div className="w-full bg-[#E5E5E5] bg-opacity-[0.5] pb-5 pt-[2px] h-auto">
            <MainBody>
              <Featured featuredBooks={featuredBooks} />
            </MainBody>
          </div>
        </main>

        <Footer showDeals={true} deal={footerDeal} />
      </div>
    </div>
  );
}
