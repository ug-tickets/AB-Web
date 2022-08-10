import React from "react";
import Head from "next/head";
import { Header } from "../../header";
import { Footer } from "../../footer";
import { MainBody } from "../main-body";

const SinglePage = ({ children, showSubHeader = true }) => {
  return (
    <div className="w-full">
      <Head>
        <title>African Books - Book</title>
        <meta name="description" content="Book service" />
        <meta name="handheldfriendly" content="true" />
        <meta name="mobileoptimized" content="240" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showSubHeader={showSubHeader} />
      <MainBody>{children}</MainBody>
      <Footer showDeals={false} />
    </div>
  );
};

export { SinglePage };
