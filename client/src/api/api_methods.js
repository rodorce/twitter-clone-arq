import { supabase } from "../services/supabaseClient";

export const fetchTweetData = async () => {
  try {
    const { data, error } = await supabase
      .from("tweets")
      .select()
      .order("id", { ascending: false });
    return data;
  } catch (error) {
    return error;
  }
};

export const postTweetData = async (props, content) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  console.log(content);
  const { error } = await supabase.from("tweets").insert({
    content: content,
    replies: [],
    author: props.username,
    name: props.name,
    date: today,
  });
};

export const postAppLog = async (user) => {
  const event = await getEventsAppLog(user);
  const { data, error } = await supabase
    .from("events")
    .update({ app_log: event.app_log + 1 })
    .eq("user", user);
};

export async function getEventsAppLog(user) {
  const { data, error } = await supabase
    .from("events")
    .select()
    .eq("user", user)
    .eq("app_log", 0);
  if (data.length > 0) {
    return data[0];
  } else {
    const { data, error } = await supabase
      .from("events")
      .select()
      .eq("user", user);
    return data[0];
  }
}

export const getEvents = async () => {
  const { data, error } = await supabase.from("events").select();
  return data;
};
