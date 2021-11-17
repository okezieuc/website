import Link from "next/link";

export default function LessonListItem({ lesson, courseid, lessonNumber }) {
  return (
    <div className="flex items-center my-6">
      <div className="text-2xl w-12">{lessonNumber}</div>
      <div className="flex-1">
        <div className="text-xl">
          <Link href={`/learn/${courseid}/${lesson.slug}`}>{lesson.title}</Link>
        </div>
        <div className="text-md">{lesson.description}</div>
      </div>
      <div className="text-md w-32 text-right">Completed</div>
    </div>
  );
}
