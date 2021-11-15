import Layout from "@components/app/layout";
import MyCoursesItem from "@components/courses/home/MyCoursesItem"

export default function CoursesPage() {
  return (
    <Layout>
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold font-heading">Guided Courses</h1>
        <div className="mt-4">
          This is an opportunity to easily study difficult concepts. <br />
          <br />
          These quality materials will guide you to understand concepts from the
          foundation to the apex of the topic.
        </div>
      </div>
      <div>
        <h2 className="text-xl font-heading">My Courses</h2>
        <div className="grid grid-cols-1 divide-y divide-gray-300">
          <MyCoursesItem />
          <MyCoursesItem />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-heading">Explore</h2>
      </div>
    </Layout>
  );
}
