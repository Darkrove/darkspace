import * as React from "react";
const LeftFaceArrow = ({
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
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      data-name="arrow-right-Filled"
      d="m21.707 12.707-7 7a1 1 0 0 1-1.414-1.414L18.586 13H3a1 1 0 0 1 0-2h15.586l-5.293-5.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414Z"
      style={{
        fill: {fill},
      }}
    />
  </svg>
);
export default LeftFaceArrow;
