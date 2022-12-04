import React, { createContext, useContext, useEffect, useState } from "react";
import IndividualTweet from "./IndividualTweet";
import TweetModal from "./TweetModal";
import { supabase } from "../../services/supabaseClient";
import { FetchTweetContext } from "../../contexts/TweetsContext";

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

  const postedReplyFlag = (data) => {
    setPostedReply(data);
  };

  const postedNewTweet = (data) => {
    console.log(data);
    setPostedTweet(data);
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
            return (
              <IndividualTweet
                tweet={tweet}
                postedReplyFlag={postedReplyFlag}
              />
            );
          })
        : "Cargando datos"}
    </div>
  );
};

export default Feed;
