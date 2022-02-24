import { useEffect } from "react";
import Head from "next/head";
import Layout from "@components/layout";
import ExploreItem from "@components/courses/home/ExploreItem";
import { getAllCourses } from "lib/graphcms";
import Container from "@components/container";
import { supabase } from "lib/supabaseClient";

export default function CoursesPage({ courses }) {
  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    });

    return () => {
      authListener.data.unsubscribe();
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Studymono Courses: A New Way for Secondary School Students to Learn
        </title>
        <meta
          name="description"
          content="Studymono is the easiest way to prepare for your English, Maths and Science exams. Studymono courses are written in simple English, and are accompanied by examples that are structured like actual exam questions."
        />
        <meta
          property="og:title"
          content="Studymono Courses: A New Way for Secondary School Students to Learn"
        />
        <meta
          property="og:description"
          content="Studymono is the easiest way to prepare for your English, Maths and Science exams. Studymono courses are written in simple English, and are accompanied by examples that are structured like actual exam questions."
        />
        <meta
          property="og:image"
          content="https://www.studymono.com/studymono-courses-cover.jpg"
        />
        <link rel="canonical" href="https://www.studymono.com" />
        <meta
          name="twitter:title"
          content="Studymono Courses: A New Way for Secondary School Students to Learn"
        />
        <meta
          name="twitter:description"
          content="Studymono is the easiest way to prepare for your English, Maths and Science exams. Studymono courses are written in simple English, and are accompanied by examples that are structured like actual exam questions."
        />
        <meta
          name="twitter:image"
          content="https://www.studymono.com/studymono-courses-cover.jpg"
        />
      </Head>
      <div className="bg-gray-100 pt-6 sm:pt-8 md:pt-12 pb-16">
        <Container>
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold font-heading">
              Studymono Courses
            </h1>
            <div className="mt-4 text-lg">
              Subjects are divided into themes which contain lessons on closely
              related themes. Select a theme below to learn more about that
              topic.
              <br /><br />
              We publish a new theme every Monday.
            </div>
          </div>
          <div className="mt-24">
            <div className="py-4 border-b border-gray-300">
              <h2 className="text-xl font-heading">Explore</h2>
            </div>
            <div className="grid grid-cols-1">
              {courses.map((course) => (
                <ExploreItem course={course} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const courses = (await getAllCourses()) || [];
  return {
    props: {
      courses,
    },
  };
}
