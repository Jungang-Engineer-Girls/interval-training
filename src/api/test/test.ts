import { supabase } from "@/supabase/client";

export default async function handler() {
  const { data: user, error } = await supabase.from("user").select("name");

  if (error) return { error: error.message };

  return user;
}
