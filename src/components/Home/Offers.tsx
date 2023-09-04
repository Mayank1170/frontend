import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const offers: OfferProps[] = [
  {
    icon: "/images/offers/zero-slippage.svg",
    title: "Deep Liquidity",
    id: 1,
  },
  {
    icon: "/images/offers/lp-profit.svg",
    title: "Perpetuals and Spot Trading",
    id: 2,
  },
  {
    icon: "/images/offers/min-price.svg",
    title: "Upto 50x Leverage",
    id: 3,
  },

  {
    icon: "/images/offers/assured-safety.svg",
    title: "Top-Notch Order Execution",
    id: 4,
  },
  {
    icon: "/images/offers/optimal-cap.svg",
    title: "Optimal Capital Efficiency",
    id: 5,
  },
];

// offers.push(...offers);

const Offers: React.FC = () => {
  const [cards, setCards] = useState(offers);

  return (
    <div className="flex gap-x-8 mt-8">
      <section>
        {cards.map((card) => (
          <Offer {...card} key={card.id} />
        ))}
      </section>

      <section>
        {cards.map((card) => (
          <Offer {...card} key={card.id} />
        ))}
      </section>

      <section>
        {cards.map((card) => (
          <Offer {...card} key={card.id} />
        ))}
      </section>
    </div>
  );
};

interface OfferProps {
  icon: string;
  title: string;
  id: number;
}

const Offer: React.FC<OfferProps> = ({ icon, title }) => {
  return (
    <div
      className="rounded-3xl pl-10 pr-[32px] py-9 border-2 border-[#FFFFFF55] backdrop-blur-sm flex items-center gap-x-7 min-w-[400px] max-w-[531px] w-[20vw]"
      style={{
        background:
          "linear-gradient(95.93deg, rgba(255, 255, 255, 0.325) 8.09%, rgba(255, 255, 255, 0.13) 100.01%)",
      }}
    >
      <Image src={icon} height={50} width={50} alt="icon" />
      <p className="text-2xl text-white">{title}</p>
    </div>
  );
};

export default Offers;
