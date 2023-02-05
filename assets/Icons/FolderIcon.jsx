import React from "react";

const FolderIcon = ({ fill = "currentColor", ...props }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      data-name="folder-Regular"
      d="M17 7.25h-4.2a.747.747 0 0 1-.624-.334l-1.11-1.664a2.246 2.246 0 0 0-1.872-1H7A4.756 4.756 0 0 0 2.25 9v7A4.756 4.756 0 0 0 7 20.75h10A4.756 4.756 0 0 0 21.75 16v-4A4.756 4.756 0 0 0 17 7.25ZM20.25 16A3.254 3.254 0 0 1 17 19.25H7A3.254 3.254 0 0 1 3.75 16V9A3.254 3.254 0 0 1 7 5.75h2.2a.747.747 0 0 1 .624.334l1.11 1.664a2.246 2.246 0 0 0 1.872 1H17A3.254 3.254 0 0 1 20.25 12Z"
      fill={fill}
    />
  </svg>
);

export default FolderIcon;
