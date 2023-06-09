import Image from "next/image";

export const Header = () => (
  <div className="flex w-full justify-between items-center">
    <div className="flex items-center gap-x-2">
      <h2
        style={{
          background:
            "linear-gradient(76.98deg, rgba(76, 255, 255, 0.56) 3.8%, #80FEE3 31.64%, #95FED8 42.63%, #00FFA3 92.69%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-bold text-[40px]"
      >
        Swap
      </h2>
      <Image
        src="/images/icons/refresh-circle.svg"
        width={50}
        height={50}
        alt="refresh cycle icon"
      />
    </div>
    <button
      className="font-semibold text-[18px] h-[48px] rounded-2xl py-0 px-8"
      style={{
        background: "linear-gradient(95.16deg, #3BB078 0%, #76B999 100%)",
      }}
    >
      Connect Wallet
    </button>
  </div>
);