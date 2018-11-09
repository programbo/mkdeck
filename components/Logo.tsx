import * as React from "react";

interface ILogo {
  style: React.CSSProperties;
  [index: string]: any;
}

export const Logo: React.SFC<ILogo> = ({
  width = 104,
  height = 471,
  ...props
}) => (
  <svg width={104} height={471} viewBox="0 0 104 330" {...props}>
    <path
      d="M21.613 0L0 7.408V514h26.003V32.327l21.947-8.084L52 14.816zM52 57.412V515h25.999V82.354l21.951-8.089 4.05-9.438L73.608 50z"
      fillRule="evenodd"
    />
  </svg>
);
