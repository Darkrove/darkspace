import React from 'react'

const HostIcon = ({
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
      data-name="send-Regular"
      d="M20.927 3.073a2.782 2.782 0 0 0-2.663-.738L5.151 5.614a3.83 3.83 0 0 0 .049 7.444l4.646 1.093 1.096 4.649a3.773 3.773 0 0 0 3.7 2.953h.028a3.773 3.773 0 0 0 3.714-2.9l3.281-13.118a2.781 2.781 0 0 0-.738-2.662Zm-.718 2.3-3.278 13.111a2.3 2.3 0 0 1-2.277 1.766 2.274 2.274 0 0 1-2.252-1.8l-1.1-4.69 4.228-4.23a.75.75 0 0 0-1.06-1.06l-4.233 4.23-4.69-1.1a2.33 2.33 0 0 1-.031-4.529l13.112-3.28a1.313 1.313 0 0 1 .321-.04 1.3 1.3 0 0 1 1.26 1.621Z"
      fill={fill}
    />
  </svg>
)

export default HostIcon