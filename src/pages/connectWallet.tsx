import { WalletForm } from "@/components/Wallet";
import { NextPageWithLayout } from "@/types/custom-next";
import Logo from "@/components/icons/Logo";
import Image from "next/image";

const ConnectWalletPage: NextPageWithLayout = () => {
  return (
    <div className="p-8 min-h-screen h-full">
      <div className="flex items-center mb-2">
        <Logo />
      </div>
      <div className="flex items-center pt-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <WalletForm />
          </div>
          <div className="sm:max-w-[650px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[2000px]">
            <Image src="/images/trading-reviews.png" alt="Trading Reviews" width={1790} height={1346} />
          </div>
        </div>
      </div>
    </div>
  );
};

ConnectWalletPage.getLayout = (page) => {
  return <div className="bg-[#131313]">{page}</div>;
};

export default ConnectWalletPage;