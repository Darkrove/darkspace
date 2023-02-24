import React, { Children } from "react";

const Feature = ({ title, description, icon }) => {
  return (
    <>
      <div className="card block rounded-xl p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10">
        {icon}

        <h2 className="mt-4 text-xl font-bold text-zinc-200">{title}</h2>

        <p className="mt-1 text-sm text-zinc-400">{description}</p>
      </div>
    </>
  );
};

export default Feature;
