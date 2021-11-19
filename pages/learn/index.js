import Layout from "@components/app/layout";
import MyCoursesItem from "@components/courses/home/MyCoursesItem";
import ExploreItem from "@components/courses/home/ExploreItem";
import { getAllCourses } from "lib/graphcms";

export default function CoursesPage({ courses }) {
  return (
    <Layout>
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold font-heading">Guided Courses</h1>
        <div className="mt-4 text-lg">
          This is an opportunity to easily study difficult concepts. <br />
          <br />
          These quality materials will guide you to understand concepts from the
          foundation to the apex of the topic.
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
