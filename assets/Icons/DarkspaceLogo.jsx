import * as React from "react";
const DarkspaceLogo = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 400 343"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M45.514 131.925c-19.104-33.477-8.551-75.827 23.57-94.59 32.122-18.763 73.648-6.835 92.752 26.642l83.857 146.954c19.104 33.478 8.55 75.828-23.572 94.59-32.12 18.763-73.647 6.836-92.75-26.642L45.514 131.925ZM389.07 95.596c0 37.596-30.006 68.074-67.02 68.074-37.014 0-67.02-30.478-67.02-68.074 0-37.597 30.006-68.075 67.02-68.075 37.014 0 67.02 30.478 67.02 68.075Z"
      fill={fill}
    />
  </svg>
);
export default DarkspaceLogo;
