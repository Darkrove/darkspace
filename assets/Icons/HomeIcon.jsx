import React from 'react'

const HomeIcon = ({
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
      data-name="home-Regular"
      d="m19.978 7.313-5-4.019a4.783 4.783 0 0 0-5.956 0l-5 4.019a4.722 4.722 0 0 0-1.772 3.7V17A4.753 4.753 0 0 0 7 21.746h2.75V17a2.25 2.25 0 0 1 4.5 0v4.745H17A4.753 4.753 0 0 0 21.75 17v-5.991a4.722 4.722 0 0 0-1.772-3.696ZM20.25 17A3.251 3.251 0 0 1 17 20.246h-1.25V17a3.75 3.75 0 0 0-7.5 0v3.245H7A3.251 3.251 0 0 1 3.75 17v-5.991a3.228 3.228 0 0 1 1.211-2.527l5-4.019a3.277 3.277 0 0 1 4.078 0l5 4.019a3.228 3.228 0 0 1 1.211 2.527Z"
      fill={fill}
    />
  </svg>
)

export default HomeIcon