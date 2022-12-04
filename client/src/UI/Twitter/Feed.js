import React, { createContext, useContext, useEffect, useState } from "react";
import IndividualTweet from "./IndividualTweet";
import TweetModal from "./TweetModal";
import { supabase } from "../../services/supabaseClient";
import { FetchTweetContext } from "../../contexts/TweetsContext";
import CommentTweet from "./CommentTweet";
import Replies from "./Replies";

const Feed = (props) => {
  const fetchTweetsFromContext = useContext(FetchTweetContext);
  const [tweets, setTweets] = useState("");
  const [loading, setLoading] = useState(true);
  const [postedReply, setPostedReply] = useState(false);
  const [postedTweet, setPostedTweet] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await fetchTweetsFromContext();
      setTweets(data);
      setLoading(false);
    };
    load();
  }, [fetchTweetsFromContext, postedReply, postedTweet]);

  const postedNewTweet = (data) => {
    console.log(data);
    setPostedTweet(data);
  };

  const postedNewReply = (data) => {
    setPostedReply(data);
  };
  return (
    <div className="bg-black p-10 flex items-center justify-center flex-col w-full">
      <TweetModal
        username={props.username}
        name={props.name}
        postedNewTweet={postedNewTweet}
      />
      {!loading
        ? tweets.map((tweet) => {
            return tweet.replies.length > 0 ? (
              <IndividualTweet tweet={tweet} key={tweet.id}>
                {tweet.replies.map((reply) => {
                  return <Replies reply={reply} />;
                })}
                <CommentTweet tweet={tweet} />
              </IndividualTweet>
            ) : (
              <IndividualTweet tweet={tweet}>
                <CommentTweet
                  tweet={tweet}
                  postedNewReply={postedNewReply}
                  key={tweet.id}
                />
              </IndividualTweet>
            );
          })
        : "Cargando datos"}
    </div>
  );
};

export default Feed;
