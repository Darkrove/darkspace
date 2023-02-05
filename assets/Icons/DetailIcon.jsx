import React from 'react'

const DetailIcon = ({
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
      data-name="question-circle-Regular"
      d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.761 9.761 0 0 0 12 2.25Zm0 18A8.25 8.25 0 1 1 20.25 12 8.259 8.259 0 0 1 12 20.25Zm3.691-10.924a3.647 3.647 0 0 1-1.791 3.781c-.941.625-1.146 1-1.191 1.133a.751.751 0 0 1-.711.51.766.766 0 0 1-.239-.039.751.751 0 0 1-.471-.951 4.094 4.094 0 0 1 1.782-1.9 2.153 2.153 0 0 0 1.142-2.273A2.251 2.251 0 0 0 9.75 10a.75.75 0 0 1-1.5 0 3.751 3.751 0 0 1 7.441-.674ZM13 17a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
      fill={fill}
    />
  </svg>
)

export default DetailIcon