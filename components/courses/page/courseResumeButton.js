import { handleLogin } from "lib/supabaseClient";

export default function CourseResumeButton({ destination }) {
  return (
    <button
      className="bg-indigo-600 text-white rounded-full px-6 py-2 w-max mt-4"
      onClick={() => handleLogin(destination)}
    >
      Sign in with Google to view content
    </button>
  );
}
