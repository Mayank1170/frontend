import Link from "next/link";
import Logo from "../../components/icons/Logo";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between pt-10 px-10 w-screen">
      <div className="flex items-center gap-x-10">
        <Logo />
        <NavLinks />
      </div>
      <div className="flex items-center gap-x-16">
        <Search />
        <Controls/>
      </div>
    </nav>
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
    label: "Docs",
    href: "/docs",
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
    <div className="flex bg-[#373737] rounded-2xl relative">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={link.label}
          className={classNames(
            "w-[116px] h-14 rounded-2xl flex items-center justify-center relative z-10 transition-colors duration-200 ease-in-out font-semibold",
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
        className={classNames("h-full w-[116px] absolute rounded-2xl bg-white")}
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

const Search: React.FC = () => {
  return (
    <div
      className="flex items-center w-[410px] h-[68px] rounded-2xl py-[18px] px-[26px] gap-x-3"
      style={{
        background: "rgba(217, 217, 217, 0.15)",
      }}
    >
      <Image
        src="/images/icons/search.svg"
        width={32}
        height={32}
        alt="search"
      />
      <input
        type="text"
        className="bg-transparent outline-none text-white font-semibold w-full flex-1 placeholder:text-white/30"
        placeholder="Search"
      />
    </div>
  );
};

const Controls: React.FC = () => {
  return (
    <div className="rounded-2xl grid grid-cols-2 items-center justify-items-center" style={{
      background: "rgba(217, 217, 217, 0.15)",
    }}>
      <Image
        src="/images/icons/bell.svg"
        width={36}
        height={44}
        alt="notifications"
      />
      <div className="h-[68px] w-[68px]">
        <Image
          src="/images/pfp.png"
          // fill={true}
          width={68}
          height={68}
          alt="user"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
