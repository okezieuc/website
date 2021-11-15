import Layout from "@components/app/layout";
import CourseResumeButton from "@components/courses/page/CourseResumeButton";
import LessonListHeading from "@components/courses/page/LessonListHeading";
import LessonListItem from "@components/courses/page/LessonListItem";

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
      <CourseResumeButton />
      <LessonListHeading />
      <div>
        <LessonListItem />
        <LessonListItem />
        <LessonListItem />
      </div>
    </Layout>
  );
}
