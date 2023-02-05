import React from 'react'

const DownloadIcon = ({
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
      data-name="download-Regular"
      d="M8.47 8.531A.75.75 0 0 1 9.53 7.47l1.72 1.72V4a.75.75 0 0 1 1.5 0v5.19l1.72-1.72a.75.75 0 0 1 1.06 1.061l-3 3a.751.751 0 0 1-1.06 0ZM17 10.25a.75.75 0 0 0 0 1.5A3.254 3.254 0 0 1 20.25 15v1A3.254 3.254 0 0 1 17 19.25H7A3.254 3.254 0 0 1 3.75 16v-1A3.254 3.254 0 0 1 7 11.75a.75.75 0 0 0 0-1.5A4.756 4.756 0 0 0 2.25 15v1A4.756 4.756 0 0 0 7 20.75h10A4.756 4.756 0 0 0 21.75 16v-1A4.756 4.756 0 0 0 17 10.25ZM18 15a1 1 0 1 0-1 1 1 1 0 0 0 1-1Z"
      fill={fill}
    />
  </svg>
)

export default DownloadIcon