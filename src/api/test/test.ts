import { supabase } from "@/utils/supabase/client";

export default async function handler() {
  const { data: user, error } = await supabase.from("user").select("name");

  console.log(user);
  console.log(error);

  return user;
}
