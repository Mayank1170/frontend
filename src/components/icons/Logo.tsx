import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="spedx logo" width={168} height={44} />
    </Link>
  );
};

export default Logo;
