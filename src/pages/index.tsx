import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Val Codes</title>
        <meta name="portfolio" content="Vale's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <NavBar />
      </Box>

      <Footer />
    </>
  );
};

export default Home;
