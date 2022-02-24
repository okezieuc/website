import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@components/container";
import { handleLogin, supabase } from "lib/supabaseClient";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    });

    return () => {
      authListener.data.unsubscribe();
    };
  }, []);

  return (
    <div class="w-full relative">
      <div>
        <div class="bg-black w-full text-white py-3 sm:py-4 text-sm hover:text-gray-200 transition-colors">
          <Container>
            <Link href="/blog/introducing-lessons-on-studymono-courses">
              Learn about Courses, the better way to learn →
            </Link>
          </Container>
        </div>
        <div class="text-sm md:text-lg bg-white border-b border-gray-300 py-2 md:py-4">
          <Container>
            <div class="flex flex-row items-center gap-4 md:gap-12">
              <div class="text-xl md:text-2xl font-bold mr-1 md:mr-4 hover:text-indigo-700 transition-colors">
                <Link href="/">
                  <a>
                    studymono<span className="text-indigo-700">.</span>
                  </a>
                </Link>
              </div>
              <div class="hidden sm:block hover:text-indigo-700 transition-colors">
                <Link href="/blog">Blog</Link>
              </div>
              <div class="hidden sm:block hover:text-indigo-700 transition-colors flex items-center">
                <Link href="/learn">Courses</Link>
                <span className="text-xs bg-white bg-indigo-800 text-white px-2 rounded-full ml-4 border border-indigo-800">
                  alpha
                </span>
              </div>
              <div class="flex-grow"></div>
              <div className="flex">
                <button
                  class="bg-indigo-700 py-2 md:py-2 px-4 md:px-6 rounded-md text-white hover:bg-indigo-800 transition-colors"
                  onClick={() => handleLogin()}
                >
                  Log in
                </button>
                <button
                  className="ml-2 w-8 sm:hidden"
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                  {menuIsOpen ? <CloseMenuIcon /> : <OpenMenuIcon />}
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div
        className={`${menuIsOpen ? "block" : "hidden"} absolute w-full z-50`}
      >
        <div className="text-md bg-gray-50 m-2 rounded-md px-4 py-4 border border-gray-200 shadow-sm flex flex-col gap-2">
          <MobileMenuLink title="Home" href="/" />
          <MobileMenuLink title="Blog" href="/blog" />
          <MobileMenuLink title="Courses" href="/learn" />
          <MobileMenuLink title="Terms of use" href="/terms-and-conditions" />
          <div className="flex flex-col gap-2 mt-4">
            <MobileMenuCTALink
              title="Go to Past Questions"
              href="/pastquestions"
              invert={true}
              Icon={() => (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              )}
            />
            <MobileMenuCTAButton
              title="Log into Studymono Courses"
              onClick={() => handleLogin()}
              invert={false}
              Icon={() => (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function OpenMenuIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function MobileMenuLink({ title, href }) {
  return <Link href={href}>{title}</Link>;
}

function MobileMenuCTALink({ title, href, Icon, invert = false }) {
  return (
    <Link href={href}>
      <a
        className={`${
          invert ? "bg-black" : "bg-indigo-700"
        } text-white p-2 rounded-md flex items-center`}
      >
        <Icon /> <span className="ml-2">{title}</span>
      </a>
    </Link>
  );
}

function MobileMenuCTAButton({ title, href, Icon, invert = false, onClick }) {
  return (
    <button
      className={`${
        invert ? "bg-black" : "bg-indigo-700"
      } text-white p-2 rounded-md flex items-center`}
      onClick={onClick}
    >
      <Icon /> <span className="ml-2">{title}</span>
    </button>
  );
}
