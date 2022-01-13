import Link from "next/link";

export default function ExploreItem({ course }) {
  return (
    <div className="my-4">
      <Link href={`/learn/${course.slug}`}>
        <a className="text-xl">{course.title}</a>
      </Link>
      <div className="text-md truncate">{course.description}</div>
    </div>
  );
}
