import classNames from "classnames";
import Navbar from "./Navbar";

interface AppLayoutProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "font-redhat bg-[#060606] text-white min-h-screen mt-0",
        className
      )}
      {...props}
    >
      <Navbar />
      <main className="px-12 mt-14">{children}</main>
    </div>
  );
};
0;

export default AppLayout;
