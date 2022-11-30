import React from "react";
import IndividualTweet from "./IndividualTweet";
import TweetModal from "./TweetModal";

const Feed = () => {
  return (
    <div className="bg-black p-10 flex items-center justify-center flex-col">
      <TweetModal />
      <IndividualTweet />
      <IndividualTweet />
      <IndividualTweet />
    </div>
  );
};

export default Feed;
