import { WalletForm } from "@/components/Wallet";
import { NextPageWithLayout } from "@/types/custom-next";
import Logo from "@/components/icons/Logo";
import Image from "next/image";

const ConnectWalletPage: NextPageWithLayout = () => {
  return (
    <div className="h-full min-h-screen p-8">
      <div className="flex items-center mb-2">
        <Logo />
      </div>
      <div className="flex items-center pt-4">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-grow">
            <WalletForm />
          </div>
          <div className="hidden xl:flex">
            <Image
              src="/images/trading-reviews.png"
              alt="Trading Reviews"
              width={1790}
              height={1346}
            />
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
