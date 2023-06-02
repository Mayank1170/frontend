import { NextPageWithLayout } from "@/types/custom-next";

import { Content, Hero, Footer } from "@/components/Home";

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
      <div
        className="bg-[url('/images/content-bg.svg')] relative"
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
