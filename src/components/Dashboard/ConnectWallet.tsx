import Image from "next/image";
import Link from "next/link";

export const ConnectWallet: React.FC = () => {
  return (
    <div
      className="w-full max-w-[960px] h-[500px] rounded-2xl relative flex items-center justify-center p-8"
      style={{
        background: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23FFFFFF44' stroke-width='2' stroke-dasharray='40%2c 20' stroke-dashoffset='48' stroke-linecap='square'/%3e%3c/svg%3e")`,
      }}
    >
      <Image
        src="/images/connect-wallet-bg.png"
        fill={true}
        className="object-cover"
        alt="bg connect wallet with dots"
      />
      <div
        className="flex-1 max-w-[400px] rounded-2xl border border-[#00FFA34D] px-10 py-6 flex flex-col items-center text-center"
        style={{
          background:
            "radial-gradient(116.75% 116.14% at 0% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.028) 0.01%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(24, 24, 24, 0.56)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="text-white/50 mb-8 ">
          Connect your Solana wallet to deposit funds and start trading
        </div>
        <Link href="/connectWallet">
          <button
            className="rounded-xl px-8 py-2"
            style={{
              background: "linear-gradient(275.16deg, #3BB078 0%, #59B689 100%)",
            }}
          >
            Connect Wallet
          </button>
        </Link>
      </div>
    </div>
  );
};
