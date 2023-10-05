// import { useState } from "react";

// interface TabsProps {
//   onTabChange: (selectedTab: "Price" | "Depth" | "Funding") => void;
// }

// export const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
//   const [activeComponent, setActiveComponent] = useState<
//     "Price" | "Depth" | "Funding"
//   >("Price");

//   const handleButtonClick = (componentName: "Price" | "Depth" | "Funding") => {
//     setActiveComponent(componentName);
//     onTabChange(componentName);
//   };

//   return (
//     <div className="flex flex-row justify-between items-center">
//       <div className="flex flex-row  bg-[#1C1C1C] rounded-lg border border-white/20 transition-all">
//         <button
//           onClick={() => handleButtonClick("Price")}
//           className={`rounded-lg px-7 py-3.5  font-medium hover:bg-stone-600 hover:border hover:border-emerald-600 ${
//             activeComponent === "Price"
//               ? "bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 "
//               : "bg-[#1C1C1C] text-white"
//           }`}
//         >
//           Price
//         </button>

//         <button
//           onClick={() => handleButtonClick("Depth")}
//           className={`rounded-lg px-7 py-3.5 font-medium hover:bg-stone-600 hover:border hover:border-emerald-600 ${
//             activeComponent === "Depth"
//               ? "bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950"
//               : "bg-[#1C1C1C] text-white"
//           }`}
//         >
//           Depth
//         </button>

//         <button
//           onClick={() => handleButtonClick("Funding")}
//           className={`rounded-lg px-7 py-3.5 font-medium hover:bg-stone-600 hover:border hover:border-emerald-600 ${
//             activeComponent === "Funding"
//               ? "bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950"
//               : "bg-[#1C1C1C] text-white"
//           }`}
//         >
//           Funding
//         </button>
//       </div>
// <div className="flex flex-row space-x-2">
//   <div className="flex w-10 h-10 text-3xl  bg-[#202020] justify-center items-center rounded-lg border border-white/20">
//     <button>+</button>
//   </div>
//   <div className="flex w-24 h-10 bg-[#202020] rounded-lg border border-white/20 items-center justify-center ">
//     <div className="flex flex-row items-center justify-center space-x-2">
//       <p>0.1%</p>
//     </div>
//   </div>
//   <div className="flex w-10 h-10 pb-1 text-3xl bg-[#202020] justify-center items-center rounded-lg border border-white/20 ">
//     <button>-</button>
//   </div>
// </div>
// </div>
//   );
// };
import { useMemo, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface TabsProps {
  onTabChange: (selectedTab: "Price" | "Depth" | "Funding") => void;
}

const tabLinks: TabLinks[] = [
  {
    label: "Price",
    href: "/trade",
    click: "Price",
  },
  {
    label: "Depth",
    href: "/dashboard",
    click: "Depth",
  },
  {
    label: "Funding",
    href: "/swap",
    click: "Funding",
  },
];

interface TabLinks {
  label: string;
  href: string;
  click: string;
}

export const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeComponent, setActiveComponent] = useState<
    "Price" | "Depth" | "Funding"
  >("Price");

  const handleButtonClick = (componentName: "Price" | "Depth" | "Funding") => {
    setActiveComponent(componentName);
    onTabChange(componentName);
  };
  const [links, setLinks] = useState(tabLinks);
  const router = useRouter();
  const currentLink = links.find((link) => link.href === router.pathname);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentLinkIndex = useMemo(
    () => links.findIndex((link) => link.href === router.pathname),
    [router.pathname, links]
  );

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex bg-[#1C1C1C] rounded-lg border border-white/20 relative">
          {links.map((link, index) => (
            <div
              // href={link.href}
              onClick={() =>
                handleButtonClick(link.click as "Price" | "Depth" | "Funding")
              }
              key={link.label}
              className={classNames(
                "w-[105px] h-14 rounded-lg flex items-center justify-center relative z-10 transition-colors duration-200 ease-in-out font-semibold",
                {
                  "text-black":
                    // link.href === currentLink?.click &&
                    activeIndex === currentLinkIndex,
                  "text-white": link.click !== currentLink?.click,
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
            </div>
          ))}
          <motion.div
            id="active-icon"
            className={classNames(
              "h-full w-[105px] absolute rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-300 "
            )}
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
        <div className="flex flex-row space-x-2">
          <div className="flex w-10 h-10 text-3xl  bg-[#202020] justify-center items-center rounded-lg border border-white/20">
            <button>+</button>
          </div>
          <div className="flex w-24 h-10 bg-[#202020] rounded-lg border border-white/20 items-center justify-center ">
            <div className="flex flex-row items-center justify-center space-x-2">
              <p>0.1%</p>
            </div>
          </div>
          <div className="flex w-10 h-10 pb-1 text-3xl bg-[#202020] justify-center items-center rounded-lg border border-white/20 ">
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};
