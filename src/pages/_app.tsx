import "@/styles/globals.css";

import { AppPropsWithLayout } from "@/types/custom-next";
import { NextComponentType } from "next";
import type { AppInitialProps } from "next/app";
import { AppContextType } from "next/dist/shared/lib/utils";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

import { pilatExtended } from "@/utils/fonts";
import { Red_Hat_Display } from "next/font/google";
import AppLayout from "@/layouts/AppLayout";

const redhat = Red_Hat_Display({ subsets: ["latin"] });

const MyApp: NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsWithLayout
> = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const getLayout =
    Component.getLayout ?? ((page: any) => <AppLayout>{page}</AppLayout>);
  const pageComponent = getLayout(<Component {...pageProps} />);

  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <style jsx global>
            {`
              :root {
                --redhat-font: ${redhat.style.fontFamily};
                --pilat-font: ${pilatExtended.style.fontFamily};
              }
            `}
          </style>
          {pageComponent}
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default MyApp;
