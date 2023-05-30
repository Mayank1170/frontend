import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const offers: OfferProps[] = [
  {
    icon: "/images/offers/zero-slippage.svg",
    title: "Zero Slippage",
  },
  {
    icon: "/images/offers/lp-profit.svg",
    title: "Tailored for LP profitability",
  },
  {
    icon: "/images/offers/min-price.svg",
    title: "Minimum price impact",
  },

  {
    icon: "/images/offers/assured-safety.svg",
    title: "Assured safety of LP funds",
  },
  {
    icon: "/images/offers/optimal-cap.svg",
    title: "Optimal capital efficiency",
  },
  {
    icon: "/images/offers/badhiya-security.svg",
    title: "Badhiya security",
  }

];

const Offers: React.FC = () => {
  const [cards, setCards] = useState(offers);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollSpeed = 50;

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 1000 / scrollSpeed);

    if (containerRef.current && containerRef.current.parentElement) {
      containerRef.current.parentElement.style.paddingBottom =
        containerRef.current.offsetHeight + "px";
    }

    return () => clearInterval(tickerInterval);
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    if (scrollPosition >= containerWidth / 3) {
      setScrollPosition(scrollPosition - containerWidth / 2);
      setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
    }
  }, [scrollPosition]);


  return (
    <div className="relative pt-8 overflow-x-scroll w-screen scroll scroll-hide">
      <div
        ref={containerRef}
        className="absolute gap-x-[30px] top-0 flex flex-nowrap  pt-10"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
        }}
      >
        {cards.map((offer, index) => (
          <Offer key={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

interface OfferProps {
  icon: string;
  title: string;
}

const Offer: React.FC<OfferProps> = ({ icon, title }) => {
  return (
    <div
      className="rounded-[48px] pl-10 pr-[32px] py-9 border-2 border-[#FFFFFF55] backdrop-blur-sm flex items-center gap-x-7 min-w-[400px] max-w-[531px] w-[20vw]"
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
