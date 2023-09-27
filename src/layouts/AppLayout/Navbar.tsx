import Link from "next/link";
import Logo from "../../components/icons/Logo";
import { useMemo, useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchModal from "./SearchModal";
import { useWallet } from "@solana/wallet-adapter-react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";

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
      <p className="text-lg font-semibold text-white font-redhat">
        Manage Balances
      </p>
    </div>
  );
};

const Controls: React.FC = () => {
  const { publicKey } = useWallet();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true);
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (isOpen) {
        handleClickOutside(event);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);

  return publicKey ? (
    <div>
      <div
        className="w-[150px] h-[55px] flex flex-row items-center rounded-md  border border-white border-opacity-30 border-white/20"
        style={{
          background: "rgba(217, 217, 217, 0.15)",
        }}
      >
        <Image
          src="/images/pfp.png"
          width={68}
          height={68}
          alt="user"
          className="object-cover w-full h-full rounded-md "
        />
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-center items-center w-full h-full font-bold"
        >
          {!isOpen ? (
            <BiChevronDown className="h-[35px] w-[35px]" />
          ) : (
            <BiChevronUp className="h-[35px] w-[35px]" />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="top-[90px] right-6 w-[318px] justify-between py-2 z-10 bg-[#202020] rounded-lg border border-white border-opacity-30 border-white/20 absolute"
          ref={dropdownRef}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex flex-row items-center justify-between px-4 mt-1">
            <p>Main Account</p>
            <div className="flex flex-row justify-between text-center gap-x-1">
              <div className="text-green-600 text-2xl">
                <AiOutlineHeart />
              </div>
              <p className="text-green-600 font-semibold">90%</p>
            </div>
          </div>
          <div className="flex flex-row justify-between px-3 mt-2 border-b-[0.5px] pb-4 border-zinc-600 ">
            <div className="w-[140px] h-10 pl-[10px] pr-[10px] bg-neutral-600 bg-opacity-40 rounded-lg justify-center items-center inline-flex">
              <div className="text-white text-sm font-normal font-['Red Hat Display']">
                Add Subaccount
              </div>
            </div>
            <div className="w-[140px] h-10 pl-[51px] pr-[53.50px] bg-neutral-600 bg-opacity-40 rounded-lg justify-center items-center inline-flex">
              <div className="text-white text-sm font-normal font-['Red Hat Display']">
                Manage
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] flex flex-row gap-x-2 px-4 pt-2">
              <Image
                src="/images/wallets/phantom.png"
                width={100}
                height={100}
                alt={"Phantom"}
                className="w-6 h-6 "
              />
              <p>0.23 SOL</p>
            </div>
            <div className="flex flex-row gap-x-2 px-4 mt-3">
              <BiCopy className="text-xl" />
              <p>Copy Wallet Address</p>
            </div>
            <div className="flex flex-row gap-x-2 px-4 mt-3">
              <TbDoorEnter className="text-xl" />
              <p>Disconnect</p>
            </div>
          </div>
        </div>
      )}
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
