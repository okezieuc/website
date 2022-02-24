import Head from "next/head";

export default function CoursePageSEO({ title, longDescription, slug }) {
  return (
    <Head>
      <title>{title} | Studymono Courses</title>
      <meta property="og:title" content={`${title} | Studymono Courses`} />
      <meta name="description" content={longDescription} />
      <meta property="og:description" content={longDescription} />
      <meta
        name="og:image"
        content="https://www.studymono.com/studymono-courses-cover.jpg"
      />
      <link rel="canonical" href={`https://www.studymono.com/learn/${slug}`} />
      <meta name="twitter:title" content={`${title} | Studymono Courses`} />
      <meta name="twitter:description" content={longDescription} />
      <meta
        name="twitter:image"
        content="https://www.studymono.com/studymono-courses-cover.jpg"
      />
    </Head>
  );
}
