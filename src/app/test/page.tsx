// 테스트용 페이지
"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
// import Button from "@/shared/components/buttons/button";
// import Loading from "@/shared/components/loading/loading";

import { useEffect, useState } from "react";

export default function TestPage() {
  const queryClient = new QueryClient();
  const [courseData] = useState(null);
  const [testData] = useState(null);
  const [userData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const { data: user, error: userError } = await supabase
      //   .from("user")
      //   .select("*");
      // const { data: courses, error: courseError } = await supabase
      //   .from("course")
      //   .select("*");
      // const { data: tests, error: testError } = await supabase
      //   .from("test")
      //   .select("*");
      // if (testError) {
      //   console.error("Test data fetch error:", testError);
      // } else {
      //   setTestData(tests);
      // }
    };
    fetchData();
  }, []);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div>test page</div>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        <pre>{JSON.stringify(courseData, null, 2)}</pre>
        <pre>{JSON.stringify(testData, null, 2)}</pre>
      </section>
    </HydrationBoundary>
  );
}
