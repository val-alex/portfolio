import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Body } from "../components/body";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";

const Home: NextPage = () => {
  return (
    <Box height="100vh" alignItems="center" justifyContent="center">
      <Head>
        // ts-ignore
        <title>Val Codes</title>
        <meta name="portfolio" content="Vale's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Body />
      </main>

      <Footer />
    </Box>
  );
};

export default Home;
