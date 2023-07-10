import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import LottieAnimation from '@/utils/lottieAnimation';
import animationData from '../../../public/images/lottie/loading.json';

const TopBars: React.FC<{ activeBars: number }> = ({ activeBars }) => {
  const totalBars = 4;

  return (
    <div className="ml-3 mt-1 sm:ml-4 sm:mt-2 md:ml-6 md:mt-3 lg:ml-8 lg:mt-4 absolute justify-start items-start gap-4 inline-flex">
      {Array.from({ length: totalBars }).map((_, index) => (
        <div
          key={index}
          className={`w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] h-2 relative rounded-[94px] ${
            index < activeBars ? 'bg-gradient-to-r from-cyan-300 via-teal-200 to-teal-400' : 'bg-white bg-opacity-[10%]'
          }`}
        />
      ))}
    </div>
  );
};

const WalletOptions = [
  { name: 'Brave Wallet', icon: '/images/wallets/brave.png', detected: true },
  { name: 'Phantom Wallet', icon: '/images/wallets/phantom.png', detected: true },
  { name: 'Solflare', icon: '/images/wallets/solflare.png', detected: false },
  { name: 'Glow', icon: '/images/wallets/glow.png', detected: false },
  { name: 'Backpack', icon: '/images/wallets/backpack.png', detected: false },
  { name: 'Coinbase Wallet', icon: '/images/wallets/coinbase.png', detected: false },
  { name: 'Coin 98', icon: '/images/wallets/coin98.png', detected: false },
];

const getWalletIcon = (walletName: string) => {
  const wallet = WalletOptions.find((option) => option.name === walletName);
  return wallet ? wallet.icon : '/images/symbols/solanaLogo.png';
};

export const WalletForm: React.FC = () => {
  const router = useRouter();
  const [activeForm, setActiveForm] = useState(1);
  const [activeBars, setActiveBars] = useState(1);
  const [wallet, setWallet] = useState('');
  const [modal, setModal] = useState(false);

  const walletAddress = '7QLm...Pe73';
  const walletBalance = '0.00295 SOL';

  const handleFormChange = (formNumber: number) => {
    setActiveForm(formNumber);
  };

  const renderFormContent = () => {
    switch (activeForm) {
      case 1:
        return (
          <div className="ml-2 mt-2 sm:m-4 md:m-8 lg:m-12 flex-col justify-start items-start gap-8 pt-5 inline-flex">
            <div className="flex relative">
              <button onClick={() => router.back()} className="flex items-center gap-4">
                <Image src="/images/icons/go-back.svg" alt="Go back Button" width="45" height="45" />
                <div className="opacity-90 text-white text-[28px] font-medium whitespace-nowrap">How would you like to connect to Spedx?</div>
              </button>
            </div>
            <div className="w-[523px] h-[64px] py-4 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[10%] hover:shadow-teal-500 hover:shadow-md">
              <button className="w-full opacity-[60%] text-white text-[23px] font-normal justify-center items-center" onClick={() => { handleFormChange(2); setActiveBars(2) }}>Connect with Solana wallet</button>
            </div>
            <div className="w-[523px] h-[64px] py-4 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[10%] hover:shadow-teal-500 hover:shadow-md">
              <button className="w-full opacity-[60%] text-white text-[23px] font-normal justify-center items-center" onClick={() => { handleFormChange(3); setActiveBars(2) }}>Get started with email</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>Email form here which is missing in Figma</div>
        );
      case 2:
        return (
          <div>
            {modal && (
              <div className="fixed inset-0 flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm z-50">
                <div className="w-[799px] h-[421px] relative rounded-2xl ring-teal-500 ring-1 ring-opacity-5" style={{ backgroundImage: "url('/images/modal-bg.png')" }} >
                  <div className="left-[221.50px] top-[49px] absolute justify-start items-center gap-[9px] inline-flex">
                    <div className="text-white text-[23px] font-medium">Connect your </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[132px] h-5 justify-center items-center">
                        <div className="w-[131.64px] h-[20px] relative">
                          <Image src="/images/symbols/solanaLogo.png" alt="solana logo" width={133} height={20} />
                        </div>
                      </div>
                      <div className="text-white text-[23px] font-medium">Wallet</div>
                    </div>
                  </div>
                  <div className="left-[283px] top-[169px] absolute flex flex-col justify-start items-center gap-4">
                    <div className="text-white text-[32px] font-medium">Connecting...</div>
                    <div className="opacity-40 text-white text-[16px] font-normal">Please connect your {wallet} {wallet.includes("Wallet") ? "" : "Wallet"}</div>
                  </div>
                  <div className="absolute right-5 pt-5">
                    <button onClick={() => setModal(false)}>
                      <Image src="/images/icons/cancel.svg" alt="exit button image" width={20} height={20} />
                    </button>
                  </div>
                  <div className="left-[285.24px] top-[318px] absolute justify-start items-start gap-[170px] inline-flex">
                    <div>
                      <div className="left-[13px] top-0 absolute">
                        <Image src={getWalletIcon(wallet)} alt={wallet} width={23} height={16} />
                      </div>
                    </div>
                    <div className="w-[126px] h-[126px] absolute transform translate-x-1/3 -translate-y-1/2">
                      <LottieAnimation animationData={animationData} />
                    </div>
                    <Image src="/images/spedx.png" alt="spedx logo"width={35} height={28} />
                  </div>
                </div>
              </div>
            )}

            <div className="ml-2 mt-2 sm:m-4 md:m-8 lg:m-12 flex-col justify-start items-start gap-8 pt-8 inline-flex">
              <div className="flex relative items-start">
                <button onClick={() => { handleFormChange(1); setActiveBars(1) }} className="flex items-center gap-5 pr-[100px]">
                  <Image src="/images/icons/go-back.svg" alt="Go back Button" width={45} height={45} />
                  <div className="opacity-90 text-white text-[28px] font-medium">Connect Your Wallet</div>
                </button>
              </div>
              <div className="w-[523px] px-[50px] pb-4 rounded-lg overflow-y-auto">
                <div className="scroll-container">
                  <ul className="space-y-4 max-h-[300px]">
                    {WalletOptions.sort((a, b) => {
                      if (a.detected && !b.detected) return -1;
                      if (!a.detected && b.detected) return 1;
                      return a.name.localeCompare(b.name);
                    }).map((option) => (
                      <div key={option.name} className="flex-grow m-1 mr-5 rounded-lg ring-white ring-1 ring-opacity-20 hover:shadow-teal-500 hover:shadow-sm">
                        <button onClick={() => {
                          setWallet(option.name); setModal(true); setTimeout(() => {
                            {/* Note that this will not pause when user clicks on cancel button. Handle appropriately */}
                            setActiveForm(4);
                            setActiveBars(3);
                            setModal(false);
                          }, 5000);
                        }}> {/* Simulate user logging into their wallets */}
                          <li className="flex items-center gap-3 p-2">
                            <Image src={option.icon} alt={option.name} width={22} height={22} />
                            <div className="text-white text-[16px] text-opacity-60">{option.name}</div>
                            {option.detected && <span className="text-white text-sm text-opacity-20">(Detected)</span>}
                          </li>
                        </button>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="ml-2 mt-2 sm:m-4 md:m-8 lg:m-12 flex-col justify-start items-start gap-8 pt-5 inline-flex">
            <div className="flex relative">
              <button onClick={() => {handleFormChange(2); setActiveBars(2);}} className="flex items-center gap-4">
                <Image src="/images/icons/go-back.svg" alt="Go back Button" width="45" height="45" />
                <div className="opacity-90 text-white text-[28px] font-medium">Fund your Account</div>
              </button>
            </div>
            <p className="text-[16px] text-white font-bold px-8">You&apos;ll need SOL in your wallet for transaction fees and collateral in your spedX Account for trades. Only deposit funds using the Solana network.</p>
            <div className="text-[16px] text-white font-medium px-8">Deposit SOL to Your Wallet</div>
            <div className="px-8 w-full">
              <hr className="w-full opacity-30 border-t-2" />
            </div>
            <p className="text-[16px] text-white font-medium opacity-70 px-8">We recommend having a minimum of 0.035 SOL in your wallet. Below is Your Wallet Address:</p>
            <div className="flex relative left-[35%]">
              <Image src="/images/qrcode-placeholder.png" width={176} height={176} alt={'qr code placeholder'} />
            </div>
            <div className="flex flex-col">
              <div className="text-[16px] text-[#757575] font-medium px-8">Your Wallet Address</div>
              <div className="w-[521px] h-[48px] py-4 mt-4 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[8%] flex items-center justify-between">
                <div className="text-[16px] text-white pl-4">{walletAddress}</div>
                <button className="flex items-center ml-2" onClick={() => { navigator.clipboard.writeText(walletAddress) }}>
                  <div className="text-[15px] text-white text-opacity-60 mr-2">Copy</div>
                  <div className="pr-4"><Image src="/images/icons/copy.svg" width={24} height={24} alt='copy button icon' /></div>
                </button>
              </div>
              <div className="w-[521px] h-[48px] py-4 mt-2 rounded-lg mx-[4vh] gap-3 inline-flex bg-white bg-opacity-[8%] flex items-center justify-between">
                <div className="text-[16px] text-white pl-4">Wallet Balance</div>
                <div className="text-[15px] text-white text-opacity-60 pr-4">{walletBalance}</div>
              </div>
            </div>
            <div>
              <div className="text-[16px] text-[#757575] font-medium px-8">Deposit Collateral to Drift</div>
              <button className="mx-8 mt-4">
                <div className="w-[521px] h-[48px] relative bg-white bg-opacity-10 rounded-lg justify-center items-center inline-flex hover:shadow-teal-500 hover:shadow-md">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="justify-center items-center gap-[330px] flex">
                      <div className="text-white text-[16px] font-normal">Confirm Deposit</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className="mx-8 mt-4">
                <div className="w-[521px] h-[48px] relative rounded-lg border border-white border-opacity-30 justify-center items-center inline-flex hover:shadow-teal-500 hover:shadow-md">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="justify-center items-center gap-[330px] flex">
                      <div className="text-white text-[16px] font-normal">Deposit Later</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[83vh] relative bg-[#181818] bg-opacity-[56%] rounded-3xl border border-[#4CFFFF] border-opacity-20" style={{
      boxShadow: "16px 16px #00FFA363"
    }}>
      <div className="pt-8 pl-10">
        <TopBars activeBars={activeBars} />
      </div>
      {renderFormContent()}
    </div>
  );
};