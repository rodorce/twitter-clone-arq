import React, { useEffect } from "react";
import CommentTweet from "./CommentTweet";
import Replies from "./Replies";
const IndividualTweet = (props) => {
  const postedFlag = (data) => {
    props.postedReplyFlag(data);
  };

  useEffect(() => {
    console.log("re-render");
  }, [postedFlag]);
  return (
    <>
      <div className="w-full bg-black dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border mb-10">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="ml-1.5 text-sm leading-tight">
              <span className="text-black dark:text-white font-bold block ">
                {props.tweet.name}
              </span>
              <span className="text-gray-500 dark:text-gray-400 font-normal block">
                @{props.tweet.author}
              </span>
            </div>
          </div>
          <svg
            className="text-blue-400 dark:text-white h-6 w-auto inline-block fill-current"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <p className="text-black dark:text-white block text-xl leading-snug mt-3">
          {props.tweet.content}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
          {props.tweet.date}
        </p>
        <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
        <div className="text-gray-500 dark:text-gray-400 flex mt-3">
          <div className="flex items-center mr-6">
            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <span className="ml-3 text-sm">
              {props.tweet.replies.length} respuesta(s)
            </span>
          </div>
        </div>
        {props.tweet.replies.length > 0
          ? props.tweet.replies.map((reply) => {
              return <Replies reply={reply} />;
            })
          : ""}
        <CommentTweet tweet={props.tweet} postedFlag={postedFlag} />
      </div>
    </>
  );
};

export default IndividualTweet;
