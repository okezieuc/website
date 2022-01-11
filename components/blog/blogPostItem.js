import Image from "next/image";
import Link from "next/link";
import { dateInWords } from "../../lib/dateInWords";

export default function BlogPostItem({ post }) {
  return (
    <div class="group flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 blog-item-fix">
      <div className="relative w-full h-48">
        <Link href={`/blog/${post.slug}`}>
          <a>
            <Image
              src={`/blogcovers${post.cover}`}
              alt={`Cover image for the post "${post.title}" on The Studymono Blog`}
              layout="fill"
              objectFit="cover"
              className="round-corners object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
            />
          </a>
        </Link>
      </div>
      <h2 class="text-lg font-bold sm:text-xl md:text-2xl group-hover:text-indigo-700 transition-colors">
        <Link href={`/blog/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <p class="text-sm text-gray-500">{post.excerpt}</p>
      <p class="pt-2 text-xs font-medium">
        <span class="mr-1 underline">{post.author}</span> ·{" "}
        <span class="mx-1">{dateInWords(post.date)}</span>
      </p>
    </div>
  );
}
