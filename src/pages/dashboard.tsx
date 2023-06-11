import { ConnectWallet, Markets, PortfolioValue } from "@/components/Dashboard";
import { NextPageWithLayout } from "@/types/custom-next";

const DashboardPage: NextPageWithLayout = () => {
  return <div>
    <div className="flex 2xl:gap-x-0 gap-x-10 2xl:justify-between">
      <PortfolioValue />
      <ConnectWallet />
      
    </div>
    <div className="mt-14">
      <Markets />
    </div>
  </div>;
}

export default DashboardPage;