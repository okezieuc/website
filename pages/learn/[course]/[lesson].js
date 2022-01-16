import Layout from "@components/layout";
import { getLessonData } from "lib/graphcms";
import { supabase } from "lib/supabaseClient";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Container from "@components/container";
import CourseNavigation from "@components/courses/page/courseNavigation";

export async function getServerSideProps({ req, params }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  const lesson = (await getLessonData(params.lesson, params.course)) || {};

  if (lesson.course.length === 0) {
    return { props: {}, redirect: { destination: "/learn", permanent: false } };
  }

  const source = lesson.content.markdown;
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });

  // get the previous and next lesson
  // start by locating where the current lesson is located in the array
  const [lessonLocationIndex, total] = [
    lesson.course[0].lessonSlugs.findIndex(
      (item) => item.slug == params.lesson
    ),
    lesson.course[0].lessonSlugs.length,
  ];
  // find out the indices of the previous and next lessons based on lessonLocationIndex
  const [previous, next] = [
    (lessonLocationIndex - 1 + total) % total,
    (lessonLocationIndex + 1) % total,
  ];
  // return null if a lesson if a lesson is the first or last lesson
  const lessonSlugs = [
    lessonLocationIndex != 0
      ? lesson.course[0].lessonSlugs[previous].slug
      : null,
    lessonLocationIndex != total - 1
      ? lesson.course[0].lessonSlugs[next].slug
      : null,
  ];

  return {
    props: {
      lesson,
      source: mdxSource,
      lessonSlugs,
    },
  };
}

export default function Lesson({ lesson, source, lessonSlugs }) {
  return (
    <Layout>
      <div className="bg-gray-100 border-b border-gray-300 py-24">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold font-heading">{lesson.title}</h1>
            <h2 className="text-2xl">{lesson.description}</h2>
          </div>
        </Container>
      </div>
      <div className="border-b border-gray-300">
        <Container>
          <CourseNavigation
            courseId={lesson.course[0].id}
            previousLessonSlug={lessonSlugs[0]}
            nextLessonSlug={lessonSlugs[1]}
          />
        </Container>
      </div>
      <Container>
        <div className="prose sm:prose-lg lg:prose-lg xl:prose-2xl mt-12 mx-auto">
          <MDXRemote {...source} />
        </div>
        <div className="mt-8 sm:mt-12">
          <CourseNavigation
            courseId={lesson.course[0].id}
            previousLessonSlug={lessonSlugs[0]}
            nextLessonSlug={lessonSlugs[1]}
          />
        </div>
      </Container>
    </Layout>
  );
}
