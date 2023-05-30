import { NextPageWithLayout } from "@/types/custom-next";

import { Hero } from "@/components/Home";


const Home: NextPageWithLayout = () => {
  return (
    <div className="font-redhat overflow-x-hidden bg-[#060606] text-white">
      <Hero />
    </div>
  );
};

Home.getLayout = (page) => {
  return <div>{page}</div>;
};

export default Home;
