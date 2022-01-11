import Link from "next/link";
import Image from "next/image";
import { dateInWords } from "../lib/dateInWords";
import Container from "@components/container";

function BlogPost({ post }) {
  return (
    <div class="w-full group">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <div class="bg-gray-200 h-52 rounded-2xl relative">
            <Image
              src={`/blogcovers${post.cover}`}
              alt={`Cover image for the post "${post.title}" on The Studymono Blog`}
              layout="fill"
              objectFit="cover"
              className="round-corners"
            />
          </div>
        </a>
      </Link>
      <div class="ml-4 mt-4 text-md sm:text-xl md:text-2xl group-hover:underline">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </div>
      <div class="ml-4 mt-3 font-medium md:font-bold text-gray-800 text-xs md:text-md">
        {dateInWords(post.date)}
      </div>
    </div>
  );
}

export default function LatestBlogs({ posts }) {
  return (
    <div class="py-12 md:py-32">
      <Container>
        <h2 class="font-heading text-4xl md:text-5xl mb-8 md:mb-16 font-bold">
          From <span class="text-indigo-700">the Blog</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogPost post={posts[0]} />
          <BlogPost post={posts[1]} />
          <BlogPost post={posts[2]} />
        </div>
      </Container>
    </div>
  );
}
