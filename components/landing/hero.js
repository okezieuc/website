import Link from "next/link";

function HeroNotificationBadge() {
  return (
    <div class="border rounded-2xl w-max mx-auto px-2 py-1 border-indigo-700 bg-white text-indigo-700 text-sm sm:text-md">
      <Link href="blog/past-questions-answers-and-explanations-published">
        <a>
          <span className="blink mr-1">●</span>
          We just launched answers
        </a>
      </Link>
    </div>
  );
}

function CallToAction() {
  return (
    <div class="w-max bg-indigo-700 px-4 md:px-8 py-2 md:py-4 mx-auto text-white text-sm md:text-xl border border-indigo-700 rounded-md mt-8 hover:bg-indigo-600">
      <Link href="/pastquestions">Go To Past Questions</Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section class="w-full bg-gray-100 pt-12 md:pt-20 pb-48 text-center">
      <div class="sm:max-w-xl md:max-w-4xl px-4 md:px-0 mx-auto">
        <HeroNotificationBadge />
        <h1 class="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900">
          Prepare for Exams, One Past Question at a Time
        </h1>
        <h2 class="text-md sm:text-lg md:text-2xl mt-2">
          Studymono is an online platform comprising of past questions and
          articles to help you to be better prepared for any exam you face
        </h2>
        <CallToAction />
      </div>
    </section>
  );
}
