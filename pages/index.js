import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header";
import { Slider } from "../components/slider";
import { MainBody } from "../components/shared/main-body";
import { Headings } from "../components/shared/headings";
import { Footer } from "../components/footer";

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
  return (
    <>
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
          <MainBody>
            <Headings options={headerOptions1} />
            <Headings options={headerOptions2} />
            <Headings options={headerOptions3} />
          </MainBody>
        </main>

        <Footer />
      </div>
    </>
  );
}
