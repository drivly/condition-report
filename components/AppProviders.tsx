import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeProvider } from "next-themes";

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Next Condition Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-1 text-dark-1 dark:bg-dark-1 dark:text-gray-1 min-h-screen font-poppins">
        <Navbar />
        <div className="max-w-7xl mx-auto px-5 sm:px-10">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AppProviders;
