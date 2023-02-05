import React, { Children } from "react";

const Feature = ({title, description, icon}) => {
  return (
    <>
      <a
        className="block rounded-xl border border-zinc-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10"
        href="/services/digital-campaigns"
      >
        {icon}

        <h2 className="mt-4 text-xl font-bold text-zinc-100">{title}</h2>

        <p className="mt-1 text-sm text-zinc-300">
          {description}
        </p>
      </a>
    </>
  );
};

export default Feature;
