import Link from "next/link";

export default function CourseNavigation({
  courseId,
  previousLessonSlug,
  nextLessonSlug,
}) {
  return (
    <div className="flex mt-2 md:mt-4 text-md md:text-xl pb-2 md:pb-4">
      {!previousLessonSlug || (
        <Link href={`/learn/${courseId}/${previousLessonSlug}`}>
          <a className="hover:text-indigo-700 transition-colors no-underline">
            ← Previous Lesson
          </a>
        </Link>
      )}
      <div className="flex-1"> </div>

      {!nextLessonSlug || (
        <Link href={`/learn/${courseId}/${nextLessonSlug}`}>
          <a className="hover:text-indigo-700 transition-colors no-underline">
            Next Lesson →
          </a>
        </Link>
      )}
    </div>
  );
}
