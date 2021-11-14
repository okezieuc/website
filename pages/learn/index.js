import Layout from "@components/app/layout";

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
        <h2 className="text-2xl font-heading">Your Courses</h2>
      </div>
      <div>
        <h2 className="text-2xl font-heading">Explore</h2>
      </div>
    </Layout>
  );
}
