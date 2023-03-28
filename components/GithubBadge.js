import React from 'react';
import GithubLogo from "../assets/icons/GithubLogo"

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
      <GithubLogo width={30} fill="#fff" />
      <span className="text-sm text-white font-bold">Star on Github</span>
      <span className="text-sm text-gray-400">{starsCount}</span>
    </div>
  );
};

export default GithubBadge;
