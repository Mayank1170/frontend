import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.863 12h14M12.863 5l7 7-7 7"
    />
  </svg>
);
export default ArrowRight;
