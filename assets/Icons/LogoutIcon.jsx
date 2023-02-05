import React from 'react'

const LogoutIcon = ({
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
      data-name="log-out-Regular"
      d="M12.75 21a.75.75 0 0 1-.75.75H8A4.756 4.756 0 0 1 3.25 17V7A4.756 4.756 0 0 1 8 2.25h4a.75.75 0 0 1 0 1.5H8A3.254 3.254 0 0 0 4.75 7v10A3.254 3.254 0 0 0 8 20.25h4a.75.75 0 0 1 .75.75Zm7.78-9.53-4-4a.75.75 0 1 0-1.06 1.061l2.719 2.719H10a.75.75 0 0 0 0 1.5h8.189l-2.719 2.72a.75.75 0 0 0 1.06 1.061l4-4a.75.75 0 0 0 0-1.061Z"
      fill={fill}
    />
  </svg>
)

export default LogoutIcon