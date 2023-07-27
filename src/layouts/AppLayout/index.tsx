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
        "font-redhat bg-[#060606] text-white min-h-screen mt-0 h-screen overflow-y-scroll overflow-x-hidden",
        className
      )}
      {...props}
    >
      <Navbar />
      <main className="mt-14 flex justify-center px-12">
        <div className="max-w-[100%] w-full">{children}</div>
      </main>
    </div>
  );
};
0;

export default AppLayout;
