import Head from "next/head";

export default function LessonPageSEO({
  title,
  description,
  courseId,
  lessonId,
}) {
  return (
    <Head>
      <title>{title} | Studymono Courses</title>
      <meta property="og:title" content={`${title} | Studymono Courses`} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta
        name="og:image"
        content="https://www.studymono.com/studymono-courses-cover.jpg"
      />
      <link
        rel="canonical"
        href={`https://www.studymono.com/learn/${courseId}/${lessonId}`}
      />
      <meta name="twitter:title" content={`${title} | Studymono Courses`} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.studymono.com/studymono-courses-cover.jpg"
      />
    </Head>
  );
}
