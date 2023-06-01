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
        className="bg-[url('/images/content-bg.svg')]"
        style={{
          backgroundSize: "cover",
        }}
      >
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
