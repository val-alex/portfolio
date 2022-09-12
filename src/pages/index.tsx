import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { Body } from "@/components/body";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";

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
        <Body />
      </Box>

      <Footer />
    </>
  );
};

export { getStaticProps } from "../theme/chakra";
export default Home;
