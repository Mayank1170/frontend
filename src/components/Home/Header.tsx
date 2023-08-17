import Link from "next/link";
import Logo from "../icons/Logo";
import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";

const Header: React.FC = () => {
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
        <Link href="https://discord.gg/Hrf8P6rbyA"
          id="launch-app-btn"
          className="flex items-center bg-[#3BB0782B] hover:bg-[#3bb0774a] ease-in-out transition-colors duration-200 rounded-2xl gap-x-2 px-8 py-4 group"
        >
          <span className="text-[18px] font-bold">Join Discord</span>
          <Image src="/images/icons/discord.svg" height={16} width={20} alt="discord" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
