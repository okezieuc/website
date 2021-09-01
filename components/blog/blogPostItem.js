import Image from "next/image";
import CoverImage from "../../public/image.jpg";
import { dateInWords } from '../../lib/dateInWords'

export default function BlogPostItem({ post, }) {
  return (
    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
      <a href="#_" class="block">
        <Image
          src={CoverImage}
          class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
        />
      </a>
      <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
        <a href="#_">{ post.title }</a>
      </h2>
      <p class="text-sm text-gray-500">
        {post.excerpt}
      </p>
      <p class="pt-2 text-xs font-medium">
        <a href="#_" class="mr-1 underline">
          {post.author}
        </a>{" "}
        · <span class="mx-1">{ dateInWords(post.date) }</span>
      </p>
    </div>
  );
}
