import { handleLogin } from "lib/supabaseClient";
import Link from "next/link";

export default function LessonListItem({
  lesson,
  courseid,
  lessonNumber,
  isLoggedIn,
}) {
  return (
    <div className="flex sm:items-center my-6">
      <div className="text-xl w-8 sm:w-12">{lessonNumber}</div>
      <div className="flex-1 text-gray-800">
        <div className="text-2xl">
          {isLoggedIn ? (
            <Link href={`/learn/${courseid}/${lesson.slug}`}>
              <a className="text-left">{lesson.title}</a>
            </Link>
          ) : (
            <button
              onClick={() => handleLogin(`/learn/${courseid}/${lesson.slug}`)}
              className="text-left"
            >
              {lesson.title}
            </button>
          )}
        </div>
        <div className="text-md">{lesson.description}</div>
      </div>
    </div>
  );
}
