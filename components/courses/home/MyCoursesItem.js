import Link from "next/link";

export default function MyCoursesItem() {
  return (
    <div className="flex items-center my-4">
      <div className="flex-1">
        <div className="text-xl">
          <Link href="/learn/introduction-to-oranic-chemistry">
            Introduction to Organic Chemistry
          </Link>
        </div>
        <div className="text-md">
          Explore the forces that drive the interactions between carbon and
          hydrogen
        </div>
      </div>
      <div className="text-md">82% Complete</div>
    </div>
  );
}
