import "@/styles/globals.css";
import { pilatExtended } from "@/utils/fonts";
import classNames from "classnames";
import type { AppProps } from "next/app";
import { Red_Hat_Display } from "next/font/google";

const redhat = Red_Hat_Display({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <style jsx global>
        {`
          :root {
            --redhat-font: ${redhat.style.fontFamily};
            --pilat-font: ${pilatExtended.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
    
  );
}
