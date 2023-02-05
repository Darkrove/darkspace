import React from 'react'

const ClockIcon = ({
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
      data-name="clock-Regular"
      d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.761 9.761 0 0 0 12 2.25Zm0 18A8.25 8.25 0 1 1 20.25 12 8.259 8.259 0 0 1 12 20.25ZM16.75 12a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 1.5 0v4.25H16a.75.75 0 0 1 .75.75Z"
      fill={fill}
    />
  </svg>
)

export default ClockIcon