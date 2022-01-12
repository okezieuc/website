import Link from "next/link";
import { useState } from "react";
import Container from "@components/container";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div class="w-full relative">
      <div>
        <div class="bg-black w-full text-white py-3 sm:py-4 text-sm hover:text-gray-200 transition-colors">
          <Container>
            <Link href="/blog/past-questions-answers-and-explanations-published">
              Learn about our recent release of answers →
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
              <div class="flex-grow"></div>
              <div className="flex">
                <div class="bg-indigo-700 py-2 md:py-2 px-4 md:px-6 rounded-md text-white hover:bg-indigo-800 transition-colors">
                  <Link href="/pastquestions">Past Questions</Link>
                </div>
                <button
                  className="ml-2"
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
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
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="absolute w-full z-50">
        <div className="text-md bg-gray-50 m-2 rounded-md px-4 py-4 border border-gray-200 shadow-sm flex flex-col gap-2">
          <MobileMenuLink title="Home" href="/" />
          <MobileMenuLink title="Blog" href="/blog" />
          <MobileMenuLink title="Terms of use" href="/terms-and-conditions" />
          <div className="flex flex-col gap-2 mt-4">
            <MobileMenuButton
              title="Go to Past Questions"
              href="/pastquestions"
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

function MobileMenuLink({ title, href }) {
  return <Link href={href}>{title}</Link>;
}

function MobileMenuButton({ title, href, Icon, invert = false }) {
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
