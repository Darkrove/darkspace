import React from 'react'

const SearchIcon = ({
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
      data-name="search-Regular"
      d="m21.53 20.47-4.694-4.695a8.264 8.264 0 1 0-1.061 1.061l4.695 4.694a.75.75 0 0 0 1.06-1.06ZM3.75 10.5a6.75 6.75 0 1 1 6.75 6.75 6.758 6.758 0 0 1-6.75-6.75Z"
      fill={fill}
    />
  </svg>
)

export default SearchIcon