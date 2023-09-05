import { NextPageWithLayout } from "@/types/custom-next";

import { Content, Hero, Footer } from "@/components/Home";
import Image from "next/image";

const Home: NextPageWithLayout = () => {
  return (
    <div
      className="font-redhat overflow-x-hidden bg-[#060606] text-white bg-[url('/images/hero-bg.svg')] bg-no-repeat"
      style={{
        // backgroundPositionX: "10%%",
        // backgroundPositionY: "-5%",
        backgroundSize: "contain",
      }}
    >
      <Hero />
      <div className="w-8 h-8 top-[1020px] right-[300px] rounded-full opacity-30 bg-cyan-300 z-80 absolute"></div>
      <div className="w-9 h-9 top-[990px] right-[50%] rounded-full opacity-20 border-2 border-cyan-300 z-80 absolute"></div>
      <div className="w-8 h-8 top-[1650px] left-[70px] rounded-full opacity-20 border-2 border-cyan-300 z-80 absolute"></div>
      <div className="w-8 h-8 top-[1600px] left-[500px] rounded-full opacity-30 bg-cyan-300 z-80 absolute"></div>
      <div className="w-8 h-8 top-[2000px] left-[43%] rounded-full opacity-20 border-2 border-cyan-300 z-80 absolute"></div>
      <div className="w-12 h-12 top-[2400px] left-[50px] rounded-full opacity-20 border-2 border-cyan-300 z-80 absolute"></div>
      <div className="w-8 h-8 top-[2050px] left-[56%] rounded-full opacity-20 border-2 border-cyan-300 z-80 absolute"></div>
      <div className="w-5 h-5 top-[1950px] right-[450px] rounded-full opacity-30 bg-cyan-300 z-80 absolute"></div>
      <div className="w-8 h-8 top-[2400px] right-[300px] rounded-full opacity-30 bg-cyan-300 z-80 absolute"></div>
      <div className="w-5 h-5 top-[2350px] right-[40%] rounded-full opacity-20 border-2 border-cyan-300 z-80 absolute"></div>


      <div
        className="mt-20 bg-[url('/images/content-bg.svg')] relative"
        style={{
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-[15px] h-[2100px] absolute top-[160px] right-[50%] bg-[#060606] z-[100] opacity-30"
          style={{
            background:
              "linear-gradient(180deg, rgba(59, 176, 120, 0.15) 3.79%, #3BB078 27.85%, rgba(59, 176, 120, 0.936441) 51.9%, rgba(59, 176, 120, 0.843548) 75.95%, rgba(59, 176, 120, 0.15) 100%)",
          }}
        />
        <Content />
        <div className="w-screen flex flex-col items-center">
          <div className="w-full max-w-[1350px]">
            <h3 className="text-5xl font-pilat mb-10 max-w-[1200px] w-full">
              Product Roadmap
            </h3>
          </div>
          <Image
            src="/images/spedx-roadmap.png"
            width={1920}
            height={600}
            alt="roadmap"
          />
        </div>

        <hr className="max-w-[1200px] mx-auto my-[60px] opacity-30" />

        <Footer />
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <div>{page}</div>;
};

export default Home;
