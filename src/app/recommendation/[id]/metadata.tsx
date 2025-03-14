import { type Metadata } from "next";

const courseData: Record<
  string,
  { title: string; timeline: { text: string; duration: number }[] }
> = {
  "1": { title: "30일 만에 -10kg 코스", timeline: [] },
  "2": { title: "극강의 유산소 코스", timeline: [] },
};

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const course = courseData[params.id] ?? { title: "정보 없음" };

  return {
    title: course.title,
    description: `${course.title} 내용`,
  };
}
