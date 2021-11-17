export default function LessonListHeading() {
  return (
    <div className="mt-16">
      <div className="flex items-end">
        <div className="border-b-2 border-indigo-600 pr-8">Course</div>
        <div className="flex-1 h-0.5 w-12 bg-gray-300"></div>
      </div>
      <div className="flex items-center py-8">
        <div className="flex-1 text-2xl font-bold">Lessons</div>
      </div>
    </div>
  );
}

// <div className="text-lg font-semibold">Progress</div>
