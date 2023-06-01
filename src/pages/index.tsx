import { NextPageWithLayout } from "@/types/custom-next";

import { Content, Hero } from "@/components/Home";


const Home: NextPageWithLayout = () => {
  return (
    <div className="font-redhat overflow-x-hidden bg-[#060606] text-white">
      <Hero />
      <div className="bg-[url('/images/content-bg.svg')]">

      <Content />
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <div>{page}</div>;
};

export default Home;
