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
