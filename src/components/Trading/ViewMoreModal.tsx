import React from "react";

interface ViewMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ViewMoreModal: React.FC<ViewMoreModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="flex flex-col z-20 fixed inset-0 bg-[black] bg-opacity-30 backdrop-blur-sm justify-center items-center"
    >
      <div className="bg-[#181818] px-5 lg:w-[50%] h-fit divide-y-2 divide-[#232323] border border-white/20 rounded">
        <div className="my-5 mt-7 px-3 font-redhat font-bold text-[20px]">
          <p>SOL-PERP MARKET DETAILS</p>
        </div>
        <div>
          <ul className="flex flex-col my-9 space-y-7 text-[15px]">
            <li className="flex  flex-row justify-between w-[100%] font-redhat font-bold ">
              <p>Min. order Size</p>
              <p>0.1</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Order Tick Size</p>
              <p>0.0001</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Order Step Size</p>
              <p>0.1</p>
            </li>

            <li className="flex flex-row justify-between w-full font-redhat font-bold">
              <p>Margin Maintenance</p>
              <p>0.002</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Total Liquidation Fee</p>
              <p>3.5%</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Insurance Fund</p>
              <p>$247K</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>P & L Pool</p>
              <p>$229K</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
