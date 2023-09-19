import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useAsyncMemo } from "use-async-memo";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import LottieAnimation from "@/utils/lottieAnimation";
import animationData from "../../../public/images/lottie/loading.json";

const ProgressBar: React.FC<{ activeBars: number }> = ({ activeBars }) => {
  const totalBars = 4;
  const barWidth = 80;
  const gapWidth = 10;
  const totalGapWidth = (totalBars - 1) * gapWidth;

  const totalBarsWidth = totalBars * barWidth;
  const totalWidthWithGaps = totalBarsWidth + totalGapWidth;
  const individualWidth = totalBarsWidth / totalBars;
  const widthPercentage = (individualWidth / totalWidthWithGaps) * 100;

  const remainingWidth = 100 - totalBars * widthPercentage;

  return (
    <div className="flex mt-1 ml-3 sm:ml-4 sm:mt-2 md:ml-6 md:mt-3 lg:ml-8 lg:mt-4">
      {Array.from({ length: totalBars }).map((_, index) => {
        const isActive = index < activeBars;
        const marginLeft = index === 0 ? 0 : `${gapWidth}px`;
        const marginRight = index !== totalBars - 1 ? `${gapWidth}px` : 0;
        const barColor = isActive ? "#2AC3A4" : "rgba(255, 255, 255, 0.1)";

        return (
          <div
            key={index}
            className="h-2 rounded-[94px] fill-animation"
            style={{
              width: `${widthPercentage}%`,
              marginLeft,
              marginRight,
              backgroundColor: barColor,
              transition: "background-color 0.3s linear",
            }}
          />
        );
      })}
      <div style={{ width: `${remainingWidth}%` }} />
    </div>
  );
};

// const WalletOptions = [
//   { name: "Brave Wallet", icon: "/images/wallets/brave.png", detected: true },
//   {
//     name: "Phantom Wallet",
//     icon: "/images/wallets/phantom.png",
//     detected: true,
//   },
//   { name: "Solflare", icon: "/images/wallets/solflare.png", detected: false },
//   { name: "Glow", icon: "/images/wallets/glow.png", detected: false },
//   { name: "Backpack", icon: "/images/wallets/backpack.png", detected: false },
//   {
//     name: "Coinbase Wallet",
//     icon: "/images/wallets/coinbase.png",
//     detected: false,
//   },
//   { name: "Coin 98", icon: "/images/wallets/coin98.png", detected: false },
// ];

// const getWalletIcon = (walletName: string) => {
//   const wallet = WalletOptions.find((option) => option.name === walletName);
//   return wallet ? wallet.icon : "/images/symbols/solanaLogo.png";
// };

export const WalletForm: React.FC = () => {
  const router = useRouter();
  const [activeForm, setActiveForm] = useState(1);
  const [activeBars, setActiveBars] = useState(1);
  // const [wallet, setWallet] = useState("");
  const [modal, setModal] = useState(false);

  const { publicKey, select, wallets, wallet, disconnect } = useWallet();
  const { connection } = useConnection();

  const balance = useAsyncMemo(async () => {
    if (!publicKey) {
      return;
    }
    return await connection.getBalance(publicKey); // LAMPORTS_PER_SOL;
  }, [publicKey, connection]);

  // const walletAddress = "7QLm...Pe73";
  // const walletBalance = "0.00295 SOL";

  useEffect(() => {
    if (!wallet && modal) {
      setModal(false);
    }
  }, [modal, wallet]);

  useEffect(() => {
    if (publicKey) {
      setActiveForm(4);
      setActiveBars(3);
    }
  }, []);

  const availableWallets = useMemo(
    () =>
      wallets.filter(
        (wallet) =>
          wallet.readyState === "Installed" || wallet.readyState === "Loadable"
      ),
    [wallets]
  );

  const notDetectedWallets = useMemo(
    () =>
      wallets.filter(
        (wallet) =>
          !(
            wallet.readyState === "Installed" ||
            wallet.readyState === "Loadable"
          )
      ),
    [wallets]
  );

  useEffect(() => {
    if (publicKey) {
      setActiveBars(3);
      setActiveForm(4);
      setModal(false);
    }
  }, [publicKey]);

  const handleFormChange = (formNumber: number) => {
    setActiveForm(formNumber);
  };

  const renderFormContent = () => {
    switch (activeForm) {
      case 1:
        return (
          <div className="inline-flex flex-col items-start justify-start gap-8 pt-5 sm:m-4 md:m-8 lg:m-12">
            <div className="relative flex">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-4"
              >
                <Image
                  src="/images/icons/go-back.svg"
                  alt="Go back Button"
                  width="45"
                  height="45"
                />
                <div className="opacity-90 text-white text-[28px] font-medium whitespace-nowrap">
                  How would you like to connect to Spedx?
                </div>
              </button>
            </div>
            <div className="w-[523px] h-[64px] py-4 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[10%] duration-150 hover:transition-all hover:shadow-teal-500 hover:shadow-md">
              <button
                className="w-full opacity-[60%] text-white text-[23px] font-normal justify-center items-center"
                onClick={() => {
                  handleFormChange(2);
                  setActiveBars(2);
                }}
              >
                Connect with Solana wallet
              </button>
            </div>
            <div className="w-[523px] h-[64px] py-4 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[10%] duration-150 relative">
              <p className="absolute px-2 py-1 text-xs text-white rounded-full -top-2 -right-6 bg-white/10 backdrop-blur-md">
                Coming Soon
              </p>
              <button
                className="w-full opacity-[60%] text-white text-[23px] font-normal justify-center items-center cursor-not-allowed bg-opacity-60"
                onClick={() => {
                  handleFormChange(3);
                  setActiveBars(2);
                }}
                disabled
              >
                Get started with email
              </button>
            </div>
          </div>
        );
      case 3:
        return <div>Email form here which is missing in Figma</div>;
      case 2:
        return (
          <div>
            {modal && (
              <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm">
                <div
                  className="w-[799px] h-[421px] relative rounded-2xl ring-teal-500 ring-1 ring-opacity-5"
                  style={{ backgroundImage: "url('/images/modal-bg.png')" }}
                >
                  <div className="left-[221.50px] top-[49px] absolute justify-start items-center gap-[9px] inline-flex">
                    <div className="text-white text-[23px] font-medium">
                      Connect your{" "}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[132px] h-5 justify-center items-center">
                        <div className="w-[131.64px] h-[20px] relative">
                          <Image
                            src="/images/symbols/solanaLogo.png"
                            alt="solana logo"
                            width={133}
                            height={20}
                          />
                        </div>
                      </div>
                      <div className="text-white text-[23px] font-medium">
                        Wallet
                      </div>
                    </div>
                  </div>
                  <div className="left-[283px] top-[169px] absolute flex flex-col justify-start items-center gap-4">
                    <div className="text-white text-[32px] font-medium">
                      Connecting...
                    </div>
                    <div className="opacity-40 text-white text-[16px] font-normal">
                      Please connect your {wallet?.adapter.name} wallet
                    </div>
                  </div>
                  <div className="absolute pt-5 right-5">
                    <button onClick={() => setModal(false)}>
                      <Image
                        src="/images/icons/cancel.svg"
                        alt="exit button image"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                  <div className="left-[285.24px] top-[318px] absolute justify-start items-start gap-[170px] inline-flex">
                    <div>
                      <div className="left-[13px] top-0 absolute">
                        <Image
                          src={wallet?.adapter.icon as string}
                          alt={wallet?.adapter.name as string}
                          width={23}
                          height={16}
                        />
                      </div>
                    </div>
                    <div className="w-[126px] h-[126px] absolute transform translate-x-1/3 -translate-y-1/2">
                      <LottieAnimation animationData={animationData} />
                    </div>
                    <Image
                      src="/images/spedx.png"
                      alt="spedx logo"
                      width={35}
                      height={28}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="inline-flex flex-col items-start justify-start gap-8 pt-8 mt-2 ml-2 sm:m-4 md:m-8 lg:m-12">
              <div className="relative flex items-start">
                <button
                  onClick={() => {
                    handleFormChange(1);
                    setActiveBars(1);
                  }}
                  className="flex items-center gap-5 pr-[100px]"
                >
                  <Image
                    src="/images/icons/go-back.svg"
                    alt="Go back Button"
                    width={45}
                    height={45}
                  />
                  <div className="opacity-90 text-white text-[28px] font-medium">
                    Connect Your Wallet
                  </div>
                </button>
              </div>
              <div className="w-[523px] px-[50px] pb-4 rounded-lg overflow-y-auto">
                <div className="scroll-container">
                  <ul className="space-y-4 max-h-[45vh]">
                    {availableWallets.map((option) => (
                      <button
                        key={option.adapter.name}
                        className="flex-grow w-[90%] m-1 mr-5 duration-150 rounded-lg ring-white ring-1 ring-opacity-20 hover:transition-all hover:shadow-teal-500 hover:shadow-sm relative"
                        onClick={() => {
                          select(option.adapter.name);
                          setModal(true);
                        }}
                      >
                        <p className="absolute px-2 py-1 text-xs text-white rounded-full -top-2 -right-6 bg-white/10 backdrop-blur-md">
                          Detected
                        </p>

                        <li className="flex items-center gap-4 px-4 py-3">
                          <Image
                            src={option.adapter.icon}
                            alt={option.adapter.name}
                            width={28}
                            height={28}
                          />
                          <div className="text-white text-[20px] text-opacity-60">
                            {option.adapter.name}
                          </div>
                        </li>
                      </button>
                    ))}

                    {notDetectedWallets.map((option) => (
                      <button
                        key={option.adapter.name}
                        className="flex-grow w-[90%] m-1 mr-5 duration-150 rounded-lg ring-white ring-1 ring-opacity-20 hover:transition-all relative cursor-not-allowed bg-opacity-60"
                        disabled
                      >
                        <p className="absolute px-2 py-1 text-xs text-white rounded-full -top-2 -right-6 bg-white/10 backdrop-blur-md">
                          Not Installed
                        </p>

                        <li className="flex items-center gap-4 px-4 py-3">
                          <Image
                            src={option.adapter.icon}
                            alt={option.adapter.name}
                            width={28}
                            height={28}
                          />
                          <div className="text-white text-[20px] text-opacity-60">
                            {option.adapter.name}
                          </div>
                        </li>
                      </button>
                    ))}
                    <div className="pt-[1px]"></div>
                  </ul>
                </div>
              </div>
            </div>
            {/* <button
              onClick={async () => {
                await disconnect();
                console.log("disconnected");
              }}
            >
              disconnect
            </button> */}
          </div>
        );
      case 4:
        return (
          <div className="inline-flex flex-col items-start justify-start gap-8 pt-5 mt-2 ml-2 sm:m-4 md:m-8 lg:m-12">
            <div className="relative flex">
              <button
                onClick={async () => {
                  await disconnect();
                  setModal(false);
                  handleFormChange(2);
                  setActiveBars(2);
                }}
                className="flex items-center gap-4"
              >
                <Image
                  src="/images/icons/go-back.svg"
                  alt="Go back Button"
                  width="45"
                  height="45"
                />
                <div className="opacity-90 text-white text-[28px] font-medium">
                  {balance && balance > 0.1
                    ? "Wallet Connected Successfully!"
                    : "Fund your Account"}
                </div>
              </button>
            </div>
            {balance && balance > 0.1 ? (
              <>
                <p className="text-[20px] text-white px-8">
                  Congrats! You have officially connected your wallet to SpedX!
                  You can now start depositing funds and start trading.
                </p>

                <div className="text-[16px] text-white px-8">
                  <p className="text-[20px] mb-2">
                    Some things you can do on SpedX:
                  </p>
                  <ul className="text-[16px] text-white list-disc">
                    <li
                      className="w-[100%]  rounded-[24px] max-w-[800px] py-6 px-8 pr-32 mt-4 relative flex items-center border border-gray-300/30"
                      style={{
                        background:
                          "linear-gradient(92.18deg, rgba(255, 255, 255, 0.182) 0%, rgba(255, 255, 255, 0.13) 100%)",
                      }}
                    >
                      Start depositing and earn yield
                    </li>
                    <li
                      className="w-[100%]  rounded-[24px] max-w-[800px] py-6 px-8 pr-32 mt-4 relative flex items-center border border-gray-300/30"
                      style={{
                        background:
                          "linear-gradient(92.18deg, rgba(255, 255, 255, 0.182) 0%, rgba(255, 255, 255, 0.13) 100%)",
                      }}
                    >
                      Trade perpetuals and spot assets
                    </li>

                    <li
                      className="w-[100%]  rounded-[24px] max-w-[800px] py-6 px-8 pr-32 mt-4 relative flex items-center border border-gray-300/30"
                      style={{
                        background:
                          "linear-gradient(92.18deg, rgba(255, 255, 255, 0.182) 0%, rgba(255, 255, 255, 0.13) 100%)",
                      }}
                    >
                      Add liquidity to our market maker and earn risk-free yield
                    </li>
                  </ul>
                </div>

                <div>
                  <button
                    className="mx-8 mt-4"
                    onClick={() => {
                      router.push("/trade");
                    }}
                  >
                    <div className="w-[521px] h-[48px] relative bg-white bg-opacity-10 rounded-lg justify-center items-center inline-flex duration-150 hover:transition-all hover:shadow-teal-500 hover:shadow-md">
                      <div className="flex items-center justify-start gap-2">
                        <div className="justify-center items-center gap-[330px] flex">
                          <div className="text-white text-[16px] font-normal">
                            Deposit your first $$$ and start trading!
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    className="mx-8 mt-4"
                    onClick={() => {
                      router.push("/pools");
                    }}
                  >
                    <div className="w-[521px] h-[48px] relative bg-white bg-opacity-10 rounded-lg justify-center items-center inline-flex duration-150 hover:transition-all hover:shadow-teal-500 hover:shadow-md">
                      <div className="flex items-center justify-start gap-2">
                        <div className="justify-center items-center gap-[330px] flex">
                          <div className="text-white text-[16px] font-normal">
                            Earn yield through our aggregated yield avenue
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-[20px] text-white font-bold px-8">
                  You&apos;ll need SOL in your wallet for transaction fees and
                  collateral in your spedX Account for trades. Only deposit
                  funds using the Solana network.
                </p>
                <div className="text-[20px] text-white font-medium px-8">
                  Deposit SOL to Your Wallet
                </div>
                <div className="w-full px-8">
                  <hr className="w-full border-t-2 opacity-30" />
                </div>
                <p className="text-[20px] text-white font-medium opacity-70 px-8">
                  We recommend having a minimum of 0.1 SOL in your wallet. Below
                  is Your Wallet Address:
                </p>
                <div className="flex relative left-[35%]">
                  <Image
                    src="/images/qrcode-placeholder.png"
                    width={176}
                    height={176}
                    alt={"qr code placeholder"}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-[16px] text-[#757575] font-medium px-8">
                    Your Wallet Address
                  </div>
                  <div className="w-[521px] h-[48px] py-4 mt-4 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[8%] flex items-center justify-between">
                    <div className="text-[16px] text-white pl-4">
                      {publicKey?.toBase58()}
                    </div>
                    <button
                      className="flex items-center ml-2"
                      onClick={() => {
                        navigator.clipboard.writeText(publicKey?.toBase58()!);
                      }}
                    >
                      <div className="text-[15px] text-white text-opacity-60 mr-2">
                        Copy
                      </div>
                      <div className="pr-4">
                        <Image
                          src="/images/icons/copy.svg"
                          width={24}
                          height={24}
                          alt="copy button icon"
                        />
                      </div>
                    </button>
                  </div>
                  <div className="w-[521px] h-[48px] py-4 mt-2 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[8%] flex items-center justify-between">
                    <div className="text-[16px] text-white pl-4">
                      Wallet Balance
                    </div>
                    <div className="text-[15px] text-white text-opacity-60 pr-4">
                      {balance} SOL
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[16px] text-[#757575] font-medium px-8">
                    Deposit Collateral to Drift
                  </div>
                  <button className="mx-8 mt-4">
                    <div className="w-[521px] h-[48px] relative bg-white bg-opacity-10 rounded-lg justify-center items-center inline-flex duration-150 hover:transition-all hover:shadow-teal-500 hover:shadow-md">
                      <div className="flex items-center justify-start gap-2">
                        <div className="justify-center items-center gap-[330px] flex">
                          <div className="text-white text-[16px] font-normal">
                            Confirm Deposit
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="mx-8 mt-4">
                    <div className="w-[521px] h-[48px] relative rounded-lg border border-white border-opacity-30 justify-center items-center inline-flex duration-150 hover:transition-all hover:shadow-teal-500 hover:shadow-md">
                      <div className="flex items-center justify-start gap-2">
                        <div className="justify-center items-center gap-[330px] flex">
                          <div className="text-white text-[16px] font-normal">
                            Deposit Later
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-[83vh] w-[97vh] relative bg-[#181818] bg-opacity-[56%] rounded-3xl border border-[#4CFFFF] border-opacity-20"
      style={{
        boxShadow: "16px 16px #00FFA363",
      }}
    >
      <div className="pt-8 pl-10 -mb-5">
        <ProgressBar activeBars={activeBars} />
      </div>
      {renderFormContent()}
    </div>
  );
};
