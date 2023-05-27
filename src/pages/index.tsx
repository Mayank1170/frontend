import Navbar from "@/components/Navbar";
import ArrowRight from "@/components/icons/ArrowRight";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPageWithLayout } from "@/types/custom-next";
import Image from "next/image";

const Home: NextPageWithLayout = () => {
  return (
    <div className="font-redhat bg-[#060606] text-white">
      <div
        className="h-screen bg-auto w-screen overflow-x-hidden bg-[url('/images/hero-bg.svg')]"
        style={{
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
      >
        <Navbar />
        <div className="w-screen flex justify-center items-center px-10 mt-14 relative">
          <div className="max-w-[1527px] w-full pt-20 relative z-10">
            <div>
              <h1
                className="text-[62px] font-pilat font-semibold"
                style={{
                  background:
                    "linear-gradient(76.98deg, rgba(76, 255, 255, 0.56) 3.8%, #80FEE3 31.64%, #95FED8 42.63%, #00FFA3 92.69%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The Era <br /> of No-Slipageon <br /> on Solana
              </h1>
            </div>

            <div
              className="rounded-[32px] max-w-[600px] py-5 px-5 pr-20 mt-10 relative flex items-center border-gradient-right bg-gradient-to-r from-white to-transparent"
              style={{
                background:
                  "linear-gradient(92.18deg, rgba(255, 255, 255, 0.182) 0%, rgba(255, 255, 255, 0.13) 100%)",
              }}
            >
              <p className="text-[20px]">
                We let you trade without worrying about unexpected price changes
                and MEV attacks
              </p>
              <button
                className="group rounded-full p-2 absolute -right-5"
                style={{
                  // linear gradient white to transparent
                  background:
                    "linear-gradient(92.18deg, rgba(255, 255, 255, 0.182) 0%, rgba(255, 255, 255, 0.13) 100%)",
                }}
              >
                <div
                  className="group-hover:opacity-75 transition-opacity ease-in-out duration-100 rounded-full flex items-center justify-center h-[30px] w-[30px]"
                  style={{
                    background:
                      "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
                  }}
                >
                  <Image
                    src="/images/play.svg"
                    height={10}
                    width={10}
                    alt="play icon"
                  />
                </div>
              </button>
            </div>
          </div>
          <button
            className="z-10 relative px-[25px] py-4 rounded-[18px] group flex mr-40 mt-auto mb-20 gap-x-4 items-center"
            style={{
              boxShadow: "0px 4px 100px 40px rgba(59, 176, 120, 0.4)",
              background: "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
            }}
          >
            <span className="w-[100px] font-bold text-[18px]">Launch app</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150 ease-out" />
          </button>

          <Image
            src="/images/hero-trading-view.png"
            width={978 * 0.6}
            height={626 * 0.6}
            alt="trading view image"
            className="absolute right-0 top-[40px] z-0"
          />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <div>{page}</div>;
};

export default Home;
