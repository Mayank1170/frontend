import classNames from "classnames";
import Image from "next/image";

const features: Omit<FeatureProps, "index">[] = [
  {
    title: (
      <>
        Experience Zero- <br /> Slippage Trading
      </>
    ),
    description:
      "Place your trades with absolutely no-slippage and MEV attacks. You are rest assured.",
    image: "/images/features/zero-slippage.png",
  },
  {
    title: <>Provide Liquidity <br /> Profitably</>,
    description: "Sustainable levels of concentrated liquidity promise potentially higher fees and improved capital efficiency for LPs",
    image: "/images/features/liquidity.png",
  },
  {
    title: <>Flexibilit of CLOB, <br /> Efficiency of AMM</>,
    description: "Place your trades with absolutely no-slippage and MEV attacks. You are rest assured.",
    image: "/images/features/flexibility.png"
  }
];


export const Content: React.FC = () => {
  return (
    <div className="">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} index={index} />
      ))}
    </div>
  );
};

interface FeatureProps {
  title: React.ReactNode;
  description: string;
  index: number;
  image: string;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  index,
  image,
}) => {
  const isInverted = index % 2 !== 0;
  return (
    <div className="w-screen flex justify-center min-h-screen">
      <div
        className={classNames("flex items-center max-w-[1350px] w-full", {
          "justify-end": isInverted,
        })}
      >
        <div className="max-w-[400px] w-full flex flex-col items-center relative">
          <div className={
            classNames("absolute font-pilat text-[130px] font-extrabold opacity-10 -top-[130px]", {
              "right-0": isInverted,
              "left-0": !isInverted,
            })
          }>
            0{index + 1}
          </div>
          <div className="flex flex-col gap-y-5">
            <h3 className="font-bold text-[34px] font-pilat">{title}</h3>
            <p className="opacity-50">{description}</p>
          </div>
          <button
            className="z-10 relative rounded-full flex mt-10 gap-x-4 items-center px-16 py-5 text-xl font-bold"
            style={{
              boxShadow: "0px 4px 100px 40px rgba(59, 176, 120, 0.4)",
              background: "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
            }}
          >
            Learn More
          </button>
        </div>
        <img src={image} alt={description} className={classNames("absolute", {
          "right-0": !isInverted,
          "left-0": isInverted,
        })} />
      </div>
    </div>
  );
};
