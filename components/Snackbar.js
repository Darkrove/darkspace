import React from "react";

const Snackbar = () => {
  return (
    <div className="absolute flex items-center top-0 right-0 shadow p-3">
      <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-700 dark:text-gray-100 divide-gray-900">
        <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-500">
          <span className="text-2xl">Success</span>
          <span className="text-xs dark:text-gray-400">
            Vitae nulla eligendi dignissimos culpa doloribus.
          </span>
        </div>
        <button className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-400 dark:border-gray-900">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
