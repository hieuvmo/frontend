import { SVGProps } from "react";

const ChevronDownIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1704 9.3295C19.6098 9.76884 19.6098 10.4812 19.1704 10.9205L12.7955 17.2954C12.3562 17.7348 11.6438 17.7348 11.2045 17.2954L4.8295 10.9205C4.39017 10.4812 4.39017 9.76884 4.8295 9.3295C5.26884 8.89017 5.98116 8.89017 6.42049 9.3295L12 14.909L17.5795 9.3295C18.0189 8.89017 18.7311 8.89017 19.1704 9.3295Z"
      />
    </svg>
  );
};

export default ChevronDownIcon;
