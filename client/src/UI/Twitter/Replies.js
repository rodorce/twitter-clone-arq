import React from "react";

const Replies = (props) => {
  return (
    <div className="w-full bg-black dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border mb-1">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="ml-1.5 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block ">
              {props.reply.author}
            </span>
            <span className="text-gray-500 dark:text-gray-400 font-normal block">
              @{props.reply.author}
            </span>
          </div>
        </div>
      </div>
      <p className="text-black dark:text-white block text-sm leading-snug mt-3">
        {props.reply.content}
      </p>
    </div>
  );
};

export default Replies;
