import Link from "next/link";
import Logo from "../../components/icons/Logo";
import { useMemo, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchModal from "./SearchModal";
import { useWallet } from "@solana/wallet-adapter-react";

const Navbar: React.FC = () => {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleSearchClick = () => {
    setShowMyModal(false);
  };
  const handleOnClose = () => {
    setShowMyModal(true);
  };

  return (
    <div>
      <nav className="relative z-10 flex items-center justify-between w-screen px-10 pt-4">
        <div className="flex items-center gap-x-10">
          <Logo />
          <NavLinks />
        </div>
        <div className="flex items-center gap-x-6">
          <Search onClick={handleOnClose} />
          <Controls />
        </div>
        <SearchModal onClick={handleSearchClick} visible={showMyModal} />
      </nav>
    </div>
  );
};

const navLinks: NavLink[] = [
  {
    label: "Trading",
    href: "/trade",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Swap",
    href: "/swap",
  },
  {
    label: "Pools",
    href: "/pools",
  },
];

interface NavLink {
  label: string;
  href: string;
}

const NavLinks: React.FC = () => {
  const [links, setLinks] = useState(navLinks);
  const router = useRouter();
  const currentLink = links.find((link) => link.href === router.pathname);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentLinkIndex = useMemo(
    () => links.findIndex((link) => link.href === router.pathname),
    [router.pathname, links]
  );

  console.log(currentLink);

  return (
    <div className="flex bg-[#373737] rounded-lg relative">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={link.label}
          className={classNames(
            "w-[116px] h-14 rounded-lg flex items-center justify-center relative z-10 transition-colors duration-200 ease-in-out font-semibold",
            {
              "text-black":
                link.href === currentLink?.href &&
                activeIndex === currentLinkIndex,
              "text-white": link.href !== currentLink?.href,
            }
          )}
          onMouseEnter={() => {
            setActiveIndex(index);
          }}
          onMouseLeave={() => {
            setActiveIndex(currentLink ? links.indexOf(currentLink) : 0);
          }}
        >
          {link.label}
        </Link>
      ))}
      <motion.div
        id="active-icon"
        className={classNames("h-full w-[116px] absolute rounded-lg bg-white")}
        animate={{
          x: activeIndex * 116,
          opacity: activeIndex !== currentLinkIndex ? 0.5 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

const Search: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      className="flex items-center justify-center w-[100%] h-[57px] rounded-lg py-[18px] px-[26px] gap-x-3 cursor-pointer"
      style={{
        background: "rgb(60,60,60)",
      }}
      onClick={onClick}
    >
      <h1 className="text-lg font-semibold text-white font-redhat">
        Manage Balances
      </h1>
    </div>
  );
};

const Controls: React.FC = () => {
  const { publicKey } = useWallet();
  return publicKey ? (
    <div
      className="grid items-center grid-cols-2 rounded-2xl justify-items-center"
      style={{
        background: "rgba(217, 217, 217, 0.15)",
      }}
    >
      <Image
        src="/images/icons/bell.svg"
        width={36}
        height={44}
        alt="notifications"
      />
      <div className="h-[68px] w-[68px]">
        <Image
          src="/images/pfp.png"
          width={68}
          height={68}
          alt="user"
          className="object-cover"
        />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-[57px] rounded-lg cursor-pointer bg-[#3db079] halo-effect hover:before:bg-[#3db079]">
      <Link href="/connectWallet">
        <button className="flex px-6 py-4">
          <div className="text-[16px] font-bold whitespace-nowrap">
            Connect Wallet
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
