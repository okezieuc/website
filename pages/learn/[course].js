import { useState, useEffect } from "react";
import Layout from "@components/layout";
import CourseResumeButton from "@components/courses/page/courseResumeButton";
import LessonListHeading from "@components/courses/page/lessonListHeading";
import LessonListItem from "@components/courses/page/lessonListItem";
import { getAllCourseSlugs, getCourseBySlug } from "lib/graphcms";
import { supabase } from "../../lib/supabaseClient";
import Container from "@components/container";

export default function CoursePage({ course }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      
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
      <div className="bg-gray-100 border-b border-gray-300 pt-6 sm:pt-8 md:pt-12">
        <Container>
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold font-heading">{course.title}</h1>
            <div className="mt-4">{course.description}</div>
          </div>
          {!session && course.lessons.length > 0 ? (
            <CourseResumeButton
              destination={`/learn/${course.id}/${course.lessons[0].slug}`}
            />
          ) : (
            ""
          )}
          <LessonListHeading />
        </Container>
      </div>
      <Container>
        <div className="flex items-center py-8">
          <div className="flex-1 text-2xl font-bold">Lessons</div>
        </div>
        <div className="-mt-6 mb-16">
          {course.lessons.map((lesson, index) => (
            <LessonListItem
              lesson={lesson}
              courseid={course.id}
              lessonNumber={index + 1}
              key={lesson.slug}
              isLoggedIn={!!session}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const course = (await getCourseBySlug(params.course)) || {};
  return {
    props: {
      course,
    },
  };
}

export async function getStaticPaths() {
  const courses = (await getAllCourseSlugs()) || [];
  return {
    paths: courses.map((course) => {
      return {
        params: {
          course: course.slug,
        },
      };
    }),
    fallback: false,
  };
}
