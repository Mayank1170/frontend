import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface PricingLevelProps {
  onOpenModal: () => void;
}

export const PricingLevels: React.FC<PricingLevelProps> = ({ onOpenModal }) => {
  return (
    <div className="flex bg-[#202020] justify-between pr-3 items-center rounded-lg border border-white border-opacity-30  border-white/20 h-fit">
      <div className="">
        <GeneralInfo />
      </div>
      <AdditionalInfo onOpenModal={onOpenModal} />
    </div>
  );
};

const GeneralInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("ETH0D231014");
  const handleChange = (option: string) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true);
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (isOpen) {
        handleClickOutside(event);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);
  return (
    <div className="flex flex-row my-2 relative">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <div className="flex flex-row py-3 px-2 items-center justify-center rounded gap-1 ">
          <Image
            src="/images/symbols/eth.png"
            width={100}
            height={100}
            alt={"Solana"}
            className="2xl:w-10 w-8 h-8 2xl:h-10 xl:flex hidden"
          />
          <div>
            {/* <p className="2xl:text-[17px] xl:text-[13px] text-[25px] font-redhat ">
             ETH0D231014
            </p> */}
            {/* {isOpen && (
              <div
                className="mt-4 w-[360px] justify-between py-2 z-20 bg-[#202020] rounded border border-white border-opacity-30 border-white/20 absolute"
                ref={dropdownRef}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="flex flex-row gap-x-2 items-center py-2 px-3">
                  <div className="opacity-40 ">
                    <RiSearch2Line className="w-6 h-6" />
                  </div>
                  <div className="text-lg items-center bg-transparent text-white font-semibold">
                    <input
                      type="string"
                      name="quantity"
                      id="quantity"
                      placeholder="Seacrh Markets"
                      className="bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-y-8 ml-5">
                  <div className="px-4 py-1 w-fit rounded text-md font-semibold bg-white bg-opacity-20 text-white/40 cursor-pointer ">
                    New Markets
                  </div>
                  <div className="flex flex-row items-center justify-between gap-x-2 w-full">
                    <div className="flex flex-row items-center gap-x-2">
                      <Image
                        src="/images/Solana.png"
                        width={100}
                        height={100}
                        alt={"solana"}
                        className="w-4 h-4"
                      />
                      <div>Sol-PERP</div>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center mr-4">
                      <p className="text-[14px]">$1.7420</p>
                      <p className="text-[11px] text-green-400">+2.64</p>
                    </div>
                  </div>
                  <div className="px-4 py-1 w-fit rounded text-md font-semibold bg-white bg-opacity-20 text-white/40 cursor-pointer ">
                    All Markets
                  </div>
                  <div className="flex flex-row items-center justify-between gap-x-2 w-full">
                    <div className="flex flex-row items-center gap-x-2">
                      <Image
                        src="/images/Solana.png"
                        width={100}
                        height={100}
                        alt={"solana"}
                        className="w-4 h-4"
                      />
                      <div>Sol-PERP</div>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center mr-4">
                      <p className="text-[14px]">$1.7420</p>
                      <p className="text-[11px] text-green-400">+2.64</p>
                    </div>
                  </div>{" "}
                  <div className="flex flex-row items-center justify-between gap-x-2 w-full">
                    <div className="flex flex-row items-center gap-x-2">
                      <Image
                        src="/images/Solana.png"
                        width={100}
                        height={100}
                        alt={"solana"}
                        className="w-4 h-4"
                      />
                      <div>Sol-PERP</div>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center mr-4">
                      <p className="text-[14px]">$1.7420</p>
                      <p className="text-[11px] text-green-400">+2.64</p>
                    </div>
                  </div>{" "}
                  <div className="flex flex-row items-center justify-between gap-x-2 w-full">
                    <div className="flex flex-row items-center gap-x-2">
                      <Image
                        src="/images/Solana.png"
                        width={100}
                        height={100}
                        alt={"solana"}
                        className="w-4 h-4"
                      />
                      <div>Sol-PERP</div>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center mr-4">
                      <p className="text-[14px]">$1.7420</p>
                      <p className="text-[11px] text-green-400">+2.64</p>
                    </div>
                  </div>{" "}
                  <div className="flex flex-row items-center justify-between gap-x-2 w-full">
                    <div className="flex flex-row items-center gap-x-2">
                      <Image
                        src="/images/Solana.png"
                        width={100}
                        height={100}
                        alt={"solana"}
                        className="w-4 h-4"
                      />
                      <div>Sol-PERP</div>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center mr-4">
                      <p className="text-[14px]">$1.7420</p>
                      <p className="text-[11px] text-green-400">+2.64</p>
                    </div>
                  </div>
                </div>
              </div>
            )} */}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="relative flex flex-col justiffity-between w-full rounded  py-2">
                <DropdownMenu.Trigger className="flex flex-row justify-between items-center px-2 text-sm py-[2.2px]">
                  {selectedOption}
                  {/* <ChevronDownIcon  /> */}
                </DropdownMenu.Trigger>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="flex flex-col w-full h-fit gap-y-5 py-2 mt-3 text-sm bg-[#202020] bg-opacity-100 items-start px-2 rounded-md border border-white border-opacity-25 z-[2] cursor-pointer relative left-20">
                <div className="flex flex-row gap-x-2 items-center py-2 px-3">
                  <div className="opacity-40 ">
                    <RiSearch2Line className="w-6 h-6" />
                  </div>
                  <div className="text-lg items-center bg-transparent text-white font-semibold">
                    <input
                      type="string"
                      name="quantity"
                      id="quantity"
                      placeholder="Search Markets"
                      className="bg-transparent"
                    />
                  </div>
                </div>
                <div className="px-4 py-1 w-fit rounded text-md font-semibold bg-white bg-opacity-20 text-white/40 cursor-pointer ">
                  New Markets
                </div>
                <DropdownMenu.Item
                  onSelect={() => handleChange("ETH0D231014")}
                  className="flex justify-between w-full"
                >
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src="/images/symbols/eth.png"
                      width={100}
                      height={100}
                      alt={"solana"}
                      className="w-4 h-4"
                    />
                    <p>ETH0D231014</p>
                  </div>
                  <div className="flex flex-row gap-x-2 items-center mr-4">
                    <p className="text-[14px]">$1.7420</p>
                    <p className="text-[11px] text-green-400">+2.64</p>
                  </div>
                </DropdownMenu.Item>
                <div className="px-4 py-1 w-fit rounded text-md font-semibold bg-white bg-opacity-20 text-white/40 cursor-pointer ">
                  All Markets
                </div>
                <DropdownMenu.Item
                  onSelect={() => handleChange("ETH0D231014")}
                  className="flex justify-between w-full"
                >
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src="/images/symbols/eth.png"
                      width={100}
                      height={100}
                      alt={"solana"}
                      className="w-4 h-4"
                    />
                    <p>ETH0D231014</p>
                  </div>{" "}
                  <div className="flex flex-row gap-x-2 items-center mr-4">
                    <p className="text-[14px]">$1.7420</p>
                    <p className="text-[11px] text-green-400">+2.64</p>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => handleChange("ETH0D231014")}
                  className="flex justify-between w-full"
                >
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src="/images/symbols/eth.png"
                      width={100}
                      height={100}
                      alt={"solana"}
                      className="w-4 h-4"
                    />
                    <p>ETH0D231014</p>
                  </div>{" "}
                  <div className="flex flex-row gap-x-2 items-center mr-4">
                    <p className="text-[14px]">$1.7420</p>
                    <p className="text-[11px] text-green-400">+2.64</p>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => handleChange("ETH0D231014")}
                  className="flex justify-between w-full"
                >
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src="/images/symbols/eth.png"
                      width={100}
                      height={100}
                      alt={"solana"}
                      className="w-4 h-4"
                    />
                    <p>ETH0D231014</p>
                  </div>{" "}
                  <div className="flex flex-row gap-x-2 items-center mr-4">
                    <p className="text-[14px]">$1.7420</p>
                    <p className="text-[11px] text-green-400">+2.64</p>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onSelect={() => handleChange("ETH0D231014")}
                  className="flex justify-between w-full"
                >
                  <div className="flex gap-x-3 items-center">
                    <Image
                      src="/images/symbols/eth.png"
                      width={100}
                      height={100}
                      alt={"solana"}
                      className="w-4 h-4"
                    />
                    <p>ETH0D231014</p>
                  </div>{" "}
                  <div className="flex flex-row gap-x-2 items-center mr-4">
                    <p className="text-[14px]">$1.7420</p>
                    <p className="text-[11px] text-green-400">+2.64</p>
                  </div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          {!isOpen ? (
            <BiChevronDown className="h-[25px] w-[25px] xl:h-[17px] xl:w-[17px]" />
          ) : (
            <BiChevronUp className="h-[25px] w-[25px]  xl:h-[17px] xl:w-[17px]" />
          )}
        </div>
      </button>
      <div className="xl:flex hidden 2xl:gap-x-5 gap-x-3 my-4">
        <div className="bg-[#39FFA0]/20 2xl:w-[90px] w-[80px] flex items-center gap-x-1 px-1 py-1 rounded-lg">
          <Image
            src="/images/icons/arrow-up.svg"
            width={21}
            height={21}
            alt={"arrow-up"}
          />
          <p className="text-[#39FFA0]">+6.5%</p>
        </div>
        <div className="bg-[#FFFFFF26] flex items-center px-3 py-1 rounded-lg">
          +112
        </div>
      </div>
    </div>
  );
};
interface AdditionalInfoProps {
  onOpenModal: () => void;
}
const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ onOpenModal }) => {
  return (
    <div className="flex h-full items-center xl:mr-0 mr-5 2xl:gap-x-6 justify-end xl:justify-between">
      <div className="flex flex-row">
        <AdditionalInfoItem value="19.5142" name="Mark Price" />
      </div>
      <div className="xl:flex  px-2 hidden">
        <AdditionalInfoItem value="$2.77M" name="24H Volume" />
      </div>
      <div className="xl:flex  hidden">
        <AdditionalInfoItem value="$19.1695" name="Index Price" />
      </div>
      <div className="xl:flex px-2  hidden">
        <AdditionalInfoItem
          value="-0.00083% in 35:14"
          name="Predicted Funding Rate"
        />
      </div>
      <div className="hidden pr-2 xl:flex">
        <AdditionalInfoItem value="90.1k/200K SOL" name="Open Interest" />
      </div>
      <button
        onClick={onOpenModal}
        className="xl:flex w-fit h-fit hidden rounded-lg px-2 py-3 xl:text-[11px] text-[14px] items-center justify-center hover:opacity-80 ease-in-out duration-200 transition-opacity"
        style={{
          background: "rgba(77, 74, 74, 0.4)",
        }}
      >
        View More Details
      </button>
    </div>
  );
};
interface AdditionalInfoItemProps {
  value: string;
  name: string;
}
const AdditionalInfoItem: React.FC<AdditionalInfoItemProps> = ({
  value,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-white/80 xl:text-[13px] 2xl:text-[15px] text-[24px] font-bold font-redhat">
        {value}
      </p>
      <p className="text-[14px] text-white/40">{name}</p>
    </div>
  );
};
