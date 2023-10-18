import Link from "next/link";
import React from "react";
import Logo from "../../components/icons/Logo";
import { useMemo, useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchModal from "./SearchModal";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { TbDoorEnter } from "react-icons/tb";
import { useAsyncMemo } from "use-async-memo";
import { RxHamburgerMenu } from "react-icons/rx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import toast from "react-hot-toast";

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
        <div className="flex items-center gap-x-5">
          <div className="xl:flex hidden">
            <Logo />
          </div>
          <div className="text-[30px] xl:hidden">
            <RxHamburgerMenu />
          </div>
          <div className="xl:hidden flex">
            <Image src="/icon.svg" alt="spedx logo" width={44} height={44} />
          </div>

          <div className="hidden xl:flex">
            <NavLinks />
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <Settings />
          <div className="hidden xl:flex">
            <Search onClick={handleOnClose} />
          </div>
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

const Settings = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className=" w-[35px] h-[35px] inline-flex items-center justify-center outline-none "
          aria-label="Customise options"
        >
          <Image
            src="/images/icons/settings2.svg"
            height={23}
            width={23}
            alt="settings"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] z-[10] bg-neutral-800 text-white rounded-md py-[10px] pr-[8px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="hover:bg-neutral-600 group text-[15px] gap-x-2 font-semibold font-['Red Hat Display'] text-violet11 rounded-[3px] my-1 py-4 flex items-center h-[25px] pr-[5px] relative pl-[15px] ">
              <Image
                src="/images/icons/graph-line.svg"
                height={23}
                width={23}
                alt="settings"
              />
              Trade
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] z-[10] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Save Page As…{" "}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⌘+S
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                <DropdownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="hover:bg-neutral-600 group text-[15px] gap-x-2 font-semibold font-['Red Hat Display'] text-violet11 rounded-[3px] my-2 py-4 flex items-center h-[25px] pr-[5px] relative pl-[15px] ">
              <Image
                src="/images/icons/invite-line.svg"
                height={23}
                width={23}
                alt="settings"
              />
              Referral System
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] z-[10] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Save Page As…{" "}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⌘+S
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                <DropdownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
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
  const { publicKey, disconnect } = useWallet();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { select, wallets, wallet } = useWallet();

  const router = useRouter();

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

  const { connection } = useConnection();

  const balance = useAsyncMemo(async () => {
    if (!publicKey) {
      return;
    }
    return (await connection.getBalance(publicKey)) / 1000000000; // LAMPORTS_PER_SOL;
  }, [publicKey, connection]);

  return publicKey ? (
    <div>
      <div
        className="xl:w-[100px] w-[80px] xl:h-[50px] flex flex-row items-center rounded-md  border border-white border-opacity-30 border-white/20"
        style={{
          background: "rgba(217, 217, 217, 0.15)",
        }}
      >
        {/* <Image
          src="/images/pfp.png"
          width={68}
          height={68}
          alt="user"
          className="object-cover w-full h-full rounded-md "
        /> */}
        <div className="p-0 w-[50%]">
          <Image
            src={wallet?.adapter.icon as string}
            alt={wallet?.adapter.name as string}
            width={60}
            height={60}
          />
        </div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-center items-center w-[50%] h-[50%] font-bold"
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
            <button className="w-[140px] h-10 pl-[10px] pr-[10px] bg-neutral-600 bg-opacity-40 rounded-lg justify-center items-center inline-flex">
              <div className="text-white text-sm font-normal font-['Red Hat Display']">
                Add Subaccount
              </div>
            </button>
            <button className="w-[140px] h-10 pl-[51px] pr-[53.50px] bg-neutral-600 bg-opacity-40 rounded-lg justify-center items-center inline-flex">
              <div className="text-white text-sm font-normal font-['Red Hat Display']">
                Manage
              </div>
            </button>
          </div>
          <div>
            <div className="w-[100%] flex flex-row gap-x-2 px-4 pt-2">
              <Image
                src={wallet?.adapter.icon as string}
                alt={wallet?.adapter.name as string}
                width={23}
                height={16}
              />
              <p> {balance} SOL</p>
            </div>
            <div className="flex flex-row gap-x-2 px-4 mt-3">
              <BiCopy className="text-xl" />
              <p>Copy Wallet Address</p>
            </div>
            <button
              className="flex flex-row gap-x-2 px-4 mt-3"
              onClick={async () => {
                await disconnect();
                toast.success("Disconnected");
                router.push("/connectWallet");
              }}
            >
              <TbDoorEnter className="text-xl" />
              <p>Disconnect</p>
            </button>
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
