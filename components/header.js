import Link from "next/link";
import { useState } from "react";
import Container from "@components/container";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div class="w-full">
      <div class="bg-black w-full text-white py-2 text-sm">
        <Container>
          <Link href="/blog/past-questions-answers-and-explanations-published">
            We're shuttting down public past question pages
          </Link>
        </Container>
      </div>
      <div class="text-sm md:text-lg bg-white border-b border-gray-300 py-2 md:py-4">
        <Container>
          <div class="flex flex-row items-center gap-4 md:gap-12">
            <div class="text-lg md:text-2xl font-bold mr-1 md:mr-4">
              <Link href="/">studymono.</Link>
            </div>
            <div class="hidden sm:block">
              <Link href="/blog">Blog</Link>
            </div>
            <div class="flex-grow"></div>
            <div class="bg-indigo-700 py-1 md:py-2 px-2 md:px-6 rounded-2xl	text-white hover:bg-indigo-600">
              <a>Newsletter starting ending of September</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
