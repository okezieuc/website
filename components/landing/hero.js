import Link from "next/link";

function HeroNotificationBadge() {
  return (
    <div class="border rounded-2xl w-max mx-auto px-2 py-1 border-indigo-700 bg-white text-indigo-700 text-sm sm:text-md hover:bg-gray-50 hover:border-indigo-800 transition-colors">
      <Link href="blog/past-questions-answers-and-explanations-published">
        <a>
          <span className="blink mr-1">●</span>
          We just launched answers
        </a>
      </Link>
    </div>
  );
}

function CallToAction({ title, href }) {
  return (
    <div class="bg-indigo-700 px-4 md:px-8 py-2 md:py-4 text-white text-sm md:text-xl border border-indigo-700 rounded-md hover:bg-indigo-800 transition-colors items-center">
      <Link href={href}>
        <a>
          {title}
          <span className="text-sm bg-white text-indigo-800 px-2 rounded-full ml-4">
            alpha
          </span>
        </a>
      </Link>
    </div>
  );
}

function InvertedCallToAction({ title, href }) {
  return (
    <div class="bg-gray-100 px-4 md:px-8 py-2 md:py-4 text-indigo-700 text-sm md:text-xl border border-indigo-700 rounded-md hover:bg-gray-200 transition-colors mt-2 sm:mt-0">
      <Link href={href}>{title}</Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section class="w-full bg-gray-100 pt-12 md:pt-20 pb-48 text-center">
      <div class="sm:max-w-xl md:max-w-4xl px-4 md:px-0 mx-auto">
        <HeroNotificationBadge />
        <h1 class="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900">
          Educational Resources <br /> for Nigerian Students
        </h1>
        <h2 class="text-md sm:text-lg md:text-2xl mt-2">
          Studymono helps you make the most of your exam self-study with
          easy-to-understand lessons on secondary school topics and a vast array
          of past questions.
        </h2>
        <div className="mx-auto w-max mt-8">
          <div className="sm:flex flex-col sm:flex-row items-center gap-4">
            <CallToAction title="Explore Lessons" href="/learn" />
            <span className="hidden sm:block text-indigo-700">or</span>
            <InvertedCallToAction
              title="Go To Past Questions"
              href="/pastquestions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
