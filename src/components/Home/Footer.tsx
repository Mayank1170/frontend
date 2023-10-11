import Link from "next/link";
import Logo from "../icons/Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center pb-20">
      <div className="max-w-[1200px] w-full flex items-center justify-between">
        <div id="about" className="max-w-[340px] w-full">
          <Logo />
          <p className="mt-5 mb-10 leading-149%] text-[21px]">
            We let you trade without worrying about unexpected price changes and
            MEV attacks
          </p>
          <div className="flex items-center gap-x-7">
            <Link href="/">
              <Image
                src="/images/social/facebook.svg"
                width={23}
                height={22}
                alt="facebook"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/twitter.svg"
                width={23}
                height={21}
                alt="twitter"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/instagram.svg"
                width={21}
                height={22}
                alt="instagram"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/linkedin.svg"
                width={22}
                height={22}
                alt="linkedin"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/social/youtube.svg"
                width={32}
                height={22}
                alt="youtube"
              />
            </Link>

            <Link href="/">
              <Image
                src="/images/social/spotify.svg"
                width={22}
                height={22}
                alt="spotify"
              />
            </Link>
          </div>
        </div>
        <div id="links" className="grid grid-cols-3">
          <div className="gap-y-3 flex flex-col">
            <p className="text-2xl">Get Started</p>
            <Link href="/" className="opacity-50">
              Product Features
            </Link>
            <Link href="/" className="opacity-50">
              Pricing
            </Link>
            <Link href="/" className="opacity-50">
              Request a Demo
            </Link>
            <Link href="/" className="opacity-50">
              Login
            </Link>
          </div>
          <div className="gap-y-3 flex flex-col">
            <p className="text-2xl">Solutions</p>
            <Link href="/" className="opacity-50">
              User Onboarding
            </Link>
            <Link href="/" className="opacity-50">
              Product Adoption
            </Link>
            <Link href="/" className="opacity-50">
              Checklists
            </Link>
            <Link href="/" className="opacity-50">
              Resource Center
            </Link>
          </div>
          <div className="gap-y-3 flex flex-col">
            <p className="text-2xl">Resources</p>
            <Link href="/" className="opacity-50">
              Blog
            </Link>
            <Link href="/" className="opacity-50">
              Case Studies
            </Link>
            <Link href="/" className="opacity-50">
              Product Adoption School
            </Link>
            <div />
          </div>
        </div>
      </div>
    </footer>
  );
};
