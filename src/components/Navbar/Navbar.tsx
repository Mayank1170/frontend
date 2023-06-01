import Link from "next/link";
import Logo from "../icons/Logo";
import ArrowRight from "../icons/ArrowRight";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center pt-10 px-10 w-screen">
      <div
        id="nav-content"
        className="flex justify-between items-center max-w-[1350px] w-full"
      >
        <div id="nav-links" className="flex items-center gap-x-[46px]">
          <Logo />
          <div className="flex items-center gap-x-[54px] text-[19px] border-l-4 border-[#81C1AA99] pl-5 leading-[25px]">
            <Link
              href="/"
              className="opacity-[0.66] hover:opacity-100 transition-opacity ease-in-out duration-200"
            >
              Learn
            </Link>
            <Link
              href="/"
              className="opacity-[0.66] hover:opacity-100 transition-opacity ease-in-out duration-200"
            >
              Twitter
            </Link>
            <Link
              href="/"
              className="opacity-[0.66] hover:opacity-100 transition-opacity ease-in-out duration-200"
            >
              Join
            </Link>
          </div>
        </div>
        <button
          id="launch-app-btn"
          className="flex items-center bg-[#3BB0782B] hover:bg-[#3bb0774a] ease-in-out transition-colors duration-200 rounded-[24px] gap-x-[9px] px-8 py-4 group"
        >
          <span className="text-[18px] font-bold">Launch app</span>
          <ArrowRight  className="group-hover:translate-x-1 transition-transform duration-150 ease-out"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
