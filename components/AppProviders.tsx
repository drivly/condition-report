import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { Footer, InfoModal, Navbar } from ".";

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <Head>
          <title>Next Condition Report</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-gray-1 text-dark-1 dark:bg-dark-1 dark:text-gray-1 min-h-screen font-poppins">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 md:px-8">{children}</div>
          <Footer />
          <InfoModal />
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default AppProviders;
