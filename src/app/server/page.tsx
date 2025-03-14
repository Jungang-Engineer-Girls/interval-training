"use client";

import { useEffect, useState } from "react";
import handler from "@/api/test/test";

export default function Server() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await handler();
      fetchedUser && setUser(fetchedUser);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Server Test Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
