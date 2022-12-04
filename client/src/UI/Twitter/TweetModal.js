import React, { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { postTweetData } from "../../api/api_methods";
const TweetModal = (props) => {
  const [content, setContent] = useState("");
  const [newTweetFlag, setNewTweetFlag] = useState(false);
  const [tweetsCounter, setTweetsCounter] = useState(0);
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function postNewTweet(e) {
    e.preventDefault();
    postTweetData(props, content);
    setNewTweetFlag((newTweetFlag) => !newTweetFlag);
    props.postedNewTweet(newTweetFlag);
    insertTweetEvent();
  }

  async function getEvents() {
    const { data, error } = await supabase
      .from("events")
      .select()
      .eq("user", props.username);
    if (data.length > 0) {
      setEvents(data);
      setTweetsCounter(data[0].tweets);
      console.log(tweetsCounter);
    } else {
      setEvents([]);
    }
    setIsLoading(false);
  }

  async function insertTweetEvent() {
    await getEvents();
    if (events.length === 0) {
      const { data, error } = await supabase
        .from("events")
        .insert({ user: props.username, tweets: 1 })
        .eq("user", props.username)
        .select();
      setEvents(data);
    } else {
      const { data, error } = await supabase
        .from("events")
        .update({ tweets: tweetsCounter + 1 })
        .eq("user", props.username);
    }
    setTweetsCounter(tweetsCounter + 1);
  }

  useEffect(() => {
    getEvents();
  }, [isLoading]);

  return (
    <div className="w-full bg-gray-900 rounded-2xl transform -translate-y-5">
      <form
        className="w-full flex px-3 py-2 pt-10"
        onSubmit={(e) => postNewTweet(e)}
      >
        <div className="mr-1"></div>
        <div className="flex-1">
          <textarea
            className="w-full p-2 bg-transparent outline-none placeholder-gray-400 text-white resize-none"
            rows="4"
            placeholder="¿Qué está pasando?"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="flex items-center justify-between pt-2 border-t border-gray-700">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 hover:text-blue-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <button
                type="submit"
                className="transition duration-500 ease-in-out bg-blue-500 bg-opacity-50 hover:bg-opacity-100 text-white text-opacity-50 hover:text-opacity-100 py-2 px-3 rounded-full text-base font-bold focus:outline-none"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetModal;
