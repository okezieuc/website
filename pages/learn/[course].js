import Layout from "@components/app/layout";

export default function CoursePage() {
  return (
    <Layout>
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold font-heading">
          Introduction to organic chemistry
        </h1>
        <div className="mt-4">
          A quick brown fox jumped over the lazy dog. Next time, it learnt to
          look before it leaps.
          <br />
          <br />
          Let's imagine the sentence before this is gramatically correct.
        </div>
      </div>
    </Layout>
  );
}
