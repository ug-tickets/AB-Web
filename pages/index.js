import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/header";
import { Slider } from "../components/slider";

export default function Home({ header }) {
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
      <Header {...header} />
      <div className={styles.container}>
        <main className={styles.main}>
          <Slider />
        </main>

        <footer className={styles.footer}>
          <a href="#">Powered by AB</a>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/Header");
  const response = await res.json();
  return {
    props: {
      header: response,
    },
  };
}
