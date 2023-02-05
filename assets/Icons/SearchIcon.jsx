import React from 'react'

const SearchIcon = ({
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M40.625 71.958a31.25 31.25 0 1 1 0-62.5 31.25 31.25 0 0 1 0 62.5Zm0-56.25a25 25 0 1 0 0 50 25 25 0 0 0 0-50Z"
      fill="#fff"
    />
    <path
      d="M87.5 90.708a3.088 3.088 0 0 1-2.208-.917L58.333 62.792a3.133 3.133 0 0 1 2.133-5.429 3.125 3.125 0 0 1 2.242.971l27 27a3.125 3.125 0 0 1 0 4.417 3.083 3.083 0 0 1-2.208.958Z"
      fill="#fff"
    />
  </svg>
)

export default SearchIcon