import React, { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";

const CommentTweet = (props) => {
  const [reply, setReply] = useState("");
  const [isPosted, setIsPosted] = useState(true);
  const [user, setUser] = useState(null);

  async function commentTweet(e) {
    e.preventDefault();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    const { error } = await supabase
      .from("tweets")
      .update({
        replies: [...props.tweet.replies, reply],
      })
      .eq("id", props.tweet.id);
    setIsPosted((isPosted) => !isPosted);
    props.postedFlag(isPosted);
  }

  async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    setUser(data.session.user.user_metadata.username);
  }

  const handleOnChange = (e) => {
    setReply({ content: e.target.value, author: user });
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <>
      <div className="w-full bg-black dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border">
        <textarea
          className="text-white dark:bg-gray-800 block text-md leading-snug mt-3 w-full"
          placeholder="Escribe una respuesta..."
          onChange={handleOnChange}
        ></textarea>
        <div className="text-gray-500 dark:text-gray-400 flex justify-end">
          <button
            onClick={(e) => commentTweet(e)}
            type="submit"
            className="transition duration-500 ease-in-out bg-blue-500 bg-opacity-50 hover:bg-opacity-100 text-white text-opacity-50 hover:text-opacity-100 py-2 px-3 rounded-full text-base font-bold focus:outline-none mt-3"
          >
            Responder
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentTweet;
