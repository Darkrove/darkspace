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
    viewBox="0 0 170 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M84.9423 11.0001L162.885 146H7L84.9423 11.0001Z" fill="#8B5CF6" />
    <path d="M70.618 35.8649L84.9423 11L162.78 145.865L135.483 145.865L70.618 35.8649Z" fill="white" />
    <path d="M56.2936 60.8492L70.5053 35.9844L135.483 145.984L107.104 145.984L56.2936 60.8492Z" fill="#1BE955" />
  </svg>
);
export default DarkspaceLogo;
