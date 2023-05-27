import Navbar from "@/components/Navbar";
import classNames from "classnames";

interface DefaultLayoutProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={classNames("font-redhat bg-[#060606] text-white h-screen mt-0",className)} {...props}>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
