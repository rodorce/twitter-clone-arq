import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth";
import Feed from "../Twitter/Feed";
import Sidebar from "../Twitter/Sidebar";
import { supabase } from "../../services/supabaseClient";

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
        <Feed username={username} name={name} />
        <div className="w-1/3 bg-black"></div>
      </div>
    </>
  );
};
