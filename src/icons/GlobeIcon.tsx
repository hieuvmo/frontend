import { SVGProps } from "react";

const GlobeIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M3.5127 9H20.4875"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5127 15H20.4874"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.7584C14.0711 20.7584 15.75 16.8371 15.75 12C15.75 7.16286 14.0711 3.24159 12 3.24159C9.92893 3.24159 8.25 7.16286 8.25 12C8.25 16.8371 9.92893 20.7584 12 20.7584Z"
        stroke="#7F56D9"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default GlobeIcon;
