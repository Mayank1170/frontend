import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Offers from "./Offers";
import Header from "./Header";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <div className="bg-auto flex flex-col min-h-screen w-screen overflow-x-hidden relative">
      <div className="h-screen relative w-screen overflow-hidden">
        <Header />
        <div className="w-screen flex justify-center items-center px-10 mt-14 relative">
          <div className="max-w-[1350px] w-full pt-20 relative z-10 flex justify-between">
            <div className="">
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
                  Exchange<br />Infrastructure <br/> that Scales 
                </h1>
              </div>

              <div
                className="w-[80%]  rounded-[24px] max-w-[800px] py-8 px-8 pr-32 mt-10 relative flex items-center border border-gray-300/30"
                style={{
                  background:
                    "linear-gradient(92.18deg, rgba(255, 255, 255, 0.182) 0%, rgba(255, 255, 255, 0.13) 100%)",
                }}

              >
                <p className="text-[20px]">
                 We build trading infrastructure for the masses
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
            {/* <button
              className="z-10 relative px-[25px] py-4 rounded-[18px] group flex mt-auto mb-20 gap-x-4 items-center right-10 top-8"
              style={{
                boxShadow: "0px 4px 100px 40px rgba(59, 176, 120, 0.4)",
                background:
                  "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
              }}
            >
              <span className="w-[100px] font-bold text-[18px]">
                Launch app
              </span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150 ease-out" />
            </button> */}
            <div className="flex rounded-2xl bg-[#3db079] halo-effect hover:before:bg-[#3db079] relative px-[25px] py-4 mt-auto mb-20 gap-x-4 right-10 top-8" style={{
                boxShadow: "0px 4px 100px 40px rgba(59, 176, 120, 0.4)",
                background:
                  "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
              }}>
              <Link href="/connectWallet">
                <button className="flex px-2 py-1">
                  <div className="text-[16px] font-bold whitespace-nowrap">Connect Wallet</div>
                </button>
              </Link>
            </div>
          </div>

          <Image
            src="/images/trading-view.png"
            width={978 * 0.6}
            height={626 * 0.6}
            alt="trading view image"
            className="absolute right-0 top-[40px] z-0"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-20">
        <span className="border rounded-[20px] text-2xl px-6 py-3">
          We Offer
        </span>
        <div id="offers">
          <Offers />
        </div>
      </div>
    </div>
  );
};
