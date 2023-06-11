export const PortfolioValue: React.FC = () => {
  return (
    <div className="w-full max-w-[520px]">
      <div
        className="w-full h-[220px] rounded-2xl pt-6 pl-8 pb-10 text-black/70"
        style={{
          background: "linear-gradient(275.16deg, #3BB078 0%, #59B689 100%)",
        }}
      >
        <div className="font-bold text-[18px] tracking-[40%]">
          PORTFOLIO VALUE
        </div>
        <div className="mt-6">
          <div className="font-bold text-6xl">$0.00</div>
          <div className="mt-1 opacity-60 font-bold flex items-center ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={5}
                fill="none"
              >
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  strokeWidth={1.5}
                  d="m1 3.854 2.49-2.49c.29-.29.78-.29 1.07 0l2.49 2.49"
                  opacity={0.4}
                />
              </svg>
            </span>
            $0.00 (0.00%) Past Week
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-4">
       <Card label="Margin Usage" />
        <Card label="Free Collateral" />
        <Card label="Leverage" />
        <Card label="Buying Power" />
      </div>
    </div>
  );
};

const Card: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => {
  return (
    <div
      className="rounded-2xl border-2 border-[#3BB0784D] pt-3 pl-3 h-[108px]"
      style={{
        background: " rgba(24, 36, 30, 0.5)",
      }}
    >
      <div>{label}</div>
      <div className="mt-4">{value || "-"}</div>
    </div>
  );
};
