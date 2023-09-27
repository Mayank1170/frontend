import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const features: Omit<FeatureProps, "index">[] = [
  {
    title: (
      <>
        Deep Liquidity <br /> across Markets
      </>
    ),
    description:
      "We have bootstrapped liquidity across perpetuals and spot markets, supporting trading of diverse range of assets.",
    image: "/images/features/zero-Slippage.png",
    btnText: "Trade Now",
    floatingImage: (
      <motion.img
        initial={{ opacity: 0, x: "-50px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        className="absolute z-10 right-44 top-[530px]"
        src="/images/zero-slippage-floating.png"
        width={673}
        height={331}
        alt="floating image zero slippage"
      />
    ),
  },
  {
    title: (
      <>
        Industry-grade <br /> Risk Management
      </>
    ),
    description:
      "We care for user assets and use advanced risk management procedures to safeguard assets from exploits at all times.",
    image: "/images/features/liquidity.png",
    btnText: "Explore our Docs",
    floatingImage: (
      <motion.img
        initial={{ opacity: 0, x: "50px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        className="absolute z-10 left-[300px] top-[340px]"
        src="/images/pools-card.png"
        width={454}
        height={581}
        alt="floating image pools card"
      />
    ),
  },
  {
    title: (
      <>
        Yield opportunities <br />
      </>
    ),
    description:
      "Our backstop liquidity market maker(BLMM) and Insurance Fund open up secure yield earning opportunities for retail users. See docs for learn more",
    image: "/images/features/Opportunity.png",
    btnText: "Earn Yield",
    floatingImage: (
      <motion.img
        initial={{ opacity: 0, x: "50px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        className="absolute z-10 right-[300px] top-[440px]"
        src="/images/trading-card.png"
        width={500}
        height={500}
        alt="floating image pools card"
      />
    ),
  },
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
  btnText: string;
  floatingImage?: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  index,
  image,
  btnText,
  floatingImage,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInverted = index % 2 !== 0;
  return (
    <div
      className="w-screen flex justify-center min-h-screen relative"
      // viewport={{ once: true, margin: "10000px 0px 0px 0px", amount: "some" }}
    >
      <div
        className={classNames("flex items-center max-w-[1350px] w-full", {
          "justify-end": isInverted,
        })}
      >
        <div className="max-w-[400px] w-full flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 0.1, y: "0px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className={classNames(
              "absolute font-pilat text-[130px] font-extrabold opacity-10 -top-[130px]",
              {
                "right-0": isInverted,
                "left-0": !isInverted,
              }
            )}
          >
            0{index + 1}
          </motion.div>
          <motion.div
            className="flex flex-col gap-y-5"
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            // viewport={{ once: true, root: ref }}
          >
            <p className="font-bold text-[34px] font-pilat">{title}</p>
            <p className="opacity-50">{description}</p>
          </motion.div>
          <motion.button
            className="z-10 rounded-2xl flex mt-10 gap-x-4 items-center px-16 py-5 text-xl font-bold"
            style={{
              boxShadow: "0px 4px 100px 40px rgba(59, 176, 120, 0.4)",
              background: "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
            }}
            initial={{ opacity: 0, y: "120px" }}
            whileInView={{ opacity: [0, 0.3, 1], y: "0px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            // viewport={{ once: true, root: ref }}
          >
            <h1>{btnText}</h1>
          </motion.button>
        </div>
        <motion.img
          src={image}
          alt={description}
          className={classNames("absolute", {
            "right-0": !isInverted,
            "left-0": isInverted,
          })}
          initial={{ opacity: 0, y: "150px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {floatingImage}
      </div>
    </div>
  );
};
