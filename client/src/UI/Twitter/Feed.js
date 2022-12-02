import React, { useEffect, useState } from "react";
import IndividualTweet from "./IndividualTweet";
import TweetModal from "./TweetModal";
import { supabase } from "../../services/supabaseClient";

const Feed = (props) => {
  const [tweets, setTweets] = useState("");
  const [loading, setLoading] = useState(true);
  const [postedReply, setPostedReply] = useState(false);
  const [postedTweet, setPostedTweet] = useState(false);
  async function getTweets() {
    const { data, error } = await supabase
      .from("tweets")
      .select()
      .order("id", { ascending: false });
    setTweets(data);
    setLoading(false);
  }

  useEffect(() => {
    getTweets();
  }, [postedReply, postedTweet]);

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
