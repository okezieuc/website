export default function LessonListItem() {
  return (
    <div className="flex items-center">
      <div className="text-2xl w-12 text-center">1</div>
      <div className="flex-1">
        <div className="text-xl">What makes carbon so special?</div>
        <div className="text-md">
          Dive into the properties of carbon that allow it to react in ways
          other elements cannot.
        </div>
      </div>
      <div className="text-md w-32 text-right">Completed</div>
    </div>
  );
}
