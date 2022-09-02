import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { Footer } from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Val Codes</title>
        <meta name="portfolio" content="Vale's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main"></Box>

      <Footer />
    </>
  );
};

export default Home;
