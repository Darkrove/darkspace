import React from 'react';

const GithubBadge = ({ repo }) => {
  const [starsCount, setStarsCount] = React.useState('');

  React.useEffect(() => {
    async function fetchStarsCount() {
      const response = await fetch(`https://api.github.com/repos/${repo}`);
      const data = await response.json();
      setStarsCount(data.stargazers_count);
    }
    fetchStarsCount();
  }, [repo]);

  return (
    <div className="flex py-2 px-4 bg-black rounded-lg items-center space-x-2">
      <svg
        width={30}
        height={30}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill='#fff'
          fillRule="evenodd"
          d="M24.998 2.083c-12.653 0-22.915 10.26-22.915 22.918 0 10.125 6.566 18.713 15.672 21.744 1.147.211 1.565-.497 1.565-1.105 0-.543-.02-1.985-.031-3.897-6.374 1.385-7.719-3.072-7.719-3.072-1.043-2.648-2.545-3.353-2.545-3.353-2.081-1.42.157-1.392.157-1.392 2.3.161 3.51 2.362 3.51 2.362 2.044 3.501 5.365 2.49 6.67 1.903.208-1.48.801-2.49 1.455-3.062-5.089-.579-10.439-2.545-10.439-11.327 0-2.501.893-4.548 2.359-6.149-.236-.58-1.022-2.911.225-6.065 0 0 1.924-.616 6.302 2.349 1.827-.509 3.788-.762 5.737-.772 1.947.01 3.906.263 5.737.772 4.375-2.965 6.295-2.349 6.295-2.349 1.251 3.154.465 5.485.23 6.065 1.468 1.601 2.355 3.648 2.355 6.149 0 8.804-5.359 10.741-10.463 11.308.822.708 1.555 2.106 1.555 4.245 0 3.062-.028 5.534-.028 6.285 0 .614.413 1.327 1.575 1.103 9.1-3.037 15.66-11.62 15.66-21.742 0-12.658-10.262-22.918-22.919-22.918"
        />
      </svg>
      <span className="text-sm text-white font-bold">Star on Github</span>
      <span className="text-sm text-gray-400">{starsCount}</span>
    </div>
  );
};

export default GithubBadge;
