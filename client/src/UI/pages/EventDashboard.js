import React, { useState, useEffect } from "react";
import { fetchTweetData, getEvents } from "../../api/api_methods";
import UsersMetrics from "../Dashboard/UsersMetrics";
import IndividualTweet from "../Twitter/IndividualTweet";
import Replies from "../Twitter/Replies";

const EventDashboard = () => {
  const [events, setEvents] = useState("");
  const [tweets, setTweets] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [isLoadingTweets, setIsLoadingTweets] = useState(true);
  useEffect(() => {
    const loadEvents = async () => {
      const data = await getEvents();
      setEvents(data);
      console.log(data);
      setIsLoadingEvents(false);
    };
    const loadTweets = async () => {
      const data = await fetchTweetData();
      setTweets(data);
      setIsLoadingTweets(false);
      console.log(tweets);
    };
    loadEvents();
    loadTweets();
  }, [isLoadingEvents, isLoadingTweets]);

  function getMostCommentedTweet() {
    let author = "";
    let content = "";
    let date = "";
    let name = "";
    let replies = [];
    let max = 0;
    if (!isLoadingEvents) {
      tweets.forEach((tweet) => {
        if (tweet.replies.length > max) {
          content = tweet.content;
          author = tweet.author;
          date = tweet.date;
          name = tweet.name;
          replies = tweet.replies;
          max = tweet.replies.length;
        }
      });
    }
    return {
      name: name,
      content: content,
      author: author,
      date: date,
      replies: replies,
    };
  }
  const mostCommentedTweet = getMostCommentedTweet();

  console.log(mostCommentedTweet);
  return (
    <div className="event-dashboard mt-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Reporte diario</h1>
      {!isLoadingEvents
        ? events.map((event) => <UsersMetrics event={event} />)
        : "Cargando datos"}
      <div className="mx-auto my-12">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Tweet mas comentado
        </h1>
        <div className="mx-24">
          {mostCommentedTweet.replies.length > 0 ? (
            <IndividualTweet
              tweet={mostCommentedTweet}
              key={mostCommentedTweet.id}
            >
              {mostCommentedTweet.replies.map((reply) => {
                return <Replies reply={reply} />;
              })}
            </IndividualTweet>
          ) : (
            <IndividualTweet tweet={mostCommentedTweet}></IndividualTweet>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
