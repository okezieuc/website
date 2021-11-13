import { dateInWords } from "../../lib/dateInWords";

export default function BlogPostHeading({ title, author, date }) {
  return (
    <div class="w-full px-6 pt-12 mb-12 bg-gray-100">
      <div class="text-center mx-auto max-w-7xl">
        <div class="container mx-auto">
          <h1 class="font-heading text-5xl font-bold max-w-4xl mx-auto leading-snug text-gray-900">
            {title}
          </h1>
          <p class="center-text mt-4 font-semibold text-gray-800">{author}</p>
          <p class="center-text my-2">{dateInWords(date)}</p>
          
        </div>
      </div>
			<div class="mt-12 border-b border-gray-300"></div>
    </div>
  );
}
