import Link from "next/link";
import { useState } from "react";
import Container from "@components/container";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div class="w-full">
      <div class="bg-black w-full text-white py-2 text-sm hover:text-gray-200 transition-colors">
        <Container>
          <Link href="/blog/past-questions-answers-and-explanations-published">
            Learn about our recent release of answers →
          </Link>
        </Container>
      </div>
      <div class="text-sm md:text-lg bg-white border-b border-gray-300 py-2 md:py-4">
        <Container>
          <div class="flex flex-row items-center gap-4 md:gap-12">
            <div class="text-lg md:text-2xl font-bold mr-1 md:mr-4 hover:text-indigo-700 transition-colors">
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
            <div class="bg-indigo-700 py-1 md:py-2 px-2 md:px-6 rounded-md text-white hover:bg-indigo-800 transition-colors">
              <Link href="/pastquestions">Past Questions</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
