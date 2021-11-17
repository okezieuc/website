import { useState, useEffect } from "react";
import Layout from "@components/app/layout";
import CourseResumeButton from "@components/courses/page/CourseResumeButton";
import LessonListHeading from "@components/courses/page/LessonListHeading";
import LessonListItem from "@components/courses/page/LessonListItem";
import { getAllCourseSlugs, getCourseBySlug } from "lib/graphcms";
import { supabase } from "../../lib/supabaseClient";

export default function CoursePage({ course }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Layout>
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
      <div className="-mt-6">
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
