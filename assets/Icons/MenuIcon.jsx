import React from 'react'

const MenuIcon = ({
    fill = "currentColor",
    ...props
  }) => (
    <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      data-name="menu-Regular"
      d="M2.25 5A.75.75 0 0 1 3 4.25h13a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5ZM21 11.25H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5Zm-9 7H3a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5Z"
      fill={fill}
    />
  </svg>
)

export default MenuIcon