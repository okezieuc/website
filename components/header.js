import Link from "next/link";
import { useState } from "react";
import Container from "@components/container";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div class="w-full">
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
              <button className="ml-2">
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
  );
}
