import Layout from "@components/app/layout";
import { getLessonData } from "lib/graphcms";
import { supabase } from "lib/supabaseClient";
import { serialize } from "next-mdx-remote/serialize";
import ReactMarkdown from "react-markdown/react-markdown.min";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

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
  const mdxSource = await serialize(source);

  return {
    props: {
      lesson,
      source: mdxSource,
    },
  };
}

export default function Lesson({ lesson }) {
  return (
    <Layout>
      <div className="md:-mx-12 lg:-mx-20 md:px-12 lg:px-20 border-b border-gray-300">
        <div className="max-w-2xl my-24">
          <h1 className="text-5xl font-bold font-heading">{lesson.title}</h1>
          <h2 className="text-2xl">{lesson.description}</h2>
        </div>
      </div>
      <div className="prose sm:prose-lg lg:prose-lg xl:prose-2xl mt-12 mx-auto">
        <ReactMarkdown
          children={lesson.content.markdown}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </Layout>
  );
}
