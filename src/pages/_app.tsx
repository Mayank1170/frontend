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
import {
  PhantomWalletAdapter,
  BackpackWalletAdapter,
  GlowWalletAdapter,
  SolflareWalletAdapter,
  BraveWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { pilatExtended } from "@/utils/fonts";
import { Red_Hat_Display } from "next/font/google";
import AppLayout from "@/layouts/AppLayout";

const queryClient = new QueryClient();

const redhat = Red_Hat_Display({ subsets: ["latin"] });

const MyApp: NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsWithLayout
> = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  const getLayout =
    Component.getLayout ?? ((page: any) => <AppLayout>{page}</AppLayout>);
  const pageComponent = getLayout(<Component {...pageProps} />);

  // const endpoint = useMemo(() => "https://solana-mainnet.rpc.extrnode.com", []);
  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BraveWalletAdapter(),
      new GlowWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    []
  );

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <QueryClientProvider client={queryClient}>
            <style jsx global>
              {`
                :root {
                  --redhat-font: ${redhat.style.fontFamily};
                  --pilat-font: ${pilatExtended.style.fontFamily};
                }
              `}
            </style>
            {pageComponent}
          </QueryClientProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default MyApp;
