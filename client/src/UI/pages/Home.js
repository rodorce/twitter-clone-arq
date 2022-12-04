import React, { createContext, useEffect, useState } from "react";
import { FetchTweetContext } from "../../contexts/TweetsContext";
import { useAuth } from "../../contexts/Auth";
import Feed from "../Twitter/Feed";
import Sidebar from "../Twitter/Sidebar";
import { supabase } from "../../services/supabaseClient";
import { fetchTweetData } from "../../API/FetchTweets";
export const Home = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  async function session() {
    const { data, error } = await supabase.auth.getSession();
    setUsername(data.session.user.user_metadata.username);
    setName(data.session.user.user_metadata.name);
  }
  useEffect(() => {
    session();
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <Sidebar username={username} name={name} />
        <FetchTweetContext.Provider value={fetchTweetData}>
          <Feed username={username} name={name} />
        </FetchTweetContext.Provider>
        <div className="w-1/3 bg-black"></div>
      </div>
    </>
  );
};
