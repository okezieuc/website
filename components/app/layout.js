import { handleLogin, handleLogout } from "lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div class="md:flex h-screen">
      <div class="hidden md:block sticky top-0">
        <div class=" w-60 h-screen pt-12 relative border-r border-gray-300">
          <div class="flex items-center bg-gray-50">
            <div class="h-12 w-1 bg-indigo-500"></div>
            <div class="ml-4 font-semibold hover:text-indigo-7000">
              Past Questions
            </div>
          </div>
          <div class="absolute border-t w-full inset-x-0 bottom-0 p-4">
            <div class="text-center font-semibold text-xl mb-8 text-gray-800">
              We're building a student platform. Be the first to know when we
              launch!
            </div>
            <div class="bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full mx-auto w-full text-center text-white font-semibold">
              <button onClick={() => handleLogin("/learn")}>Sign in</button>
            </div>
            <div class="bg-gray-900 hover:bg-gray-800 mt-2 p-2 rounded-full mx-auto w-full text-center text-white font-semibold">
              <button onClick={() => handleLogout(router)}>Sign out</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 flex-auto overflow-y-auto">
        <div class="bg-red-1000 bg-white py-4 px-4 text-xl font-semibold border-b block md:hidden">
          Studymono{" "}
          <span class="bg-indigo-50 text-xs px-2 py-1 rounded-full text-indigo-700">
            Platform launching soon
          </span>
        </div>
        <div class="relative min-h-screen">
          <div class="md:pt-12 md:mx-12 lg:mx-20 p-4 md:p-0 min-h-screen md:min-h-auto md:pb-24">
            {children}
          </div>
          <div class="md:absolute border-t border-gray-300 w-full inset-x-0 bottom-0 p-4">
            <div class="flex flex-col md:flex-row justify-between">
              <div>
                <div class="flex gap-2 md:gap-8 flex-col md:flex-row">
                  <Link href="/">Home</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/terms-and-conditions">Terms of service</Link>
                </div>
              </div>
              <div>
                <Link href="/">
                  <a class="font-semibold mt-2 md:mt-0">Studymono</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
