import Layout from "@components/layout";
import BlogPostHeading from "@components/blog/blogPostHeading";
import { getPostBySlug, getAllPosts, getNextPosts } from "../../lib/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ post }) {
  return (
    <Layout>
      <BlogPostHeading
        title={post.title}
        author={post.author}
        date={post.date}
      />
      <MDXRemote {...post.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "cover",
    "author",
    "content",
    "excerpt",
    "credits",
  ]);
  const mdxSource = await serialize(post.content);
  const nextPosts = getNextPosts(params.slug);

  return {
    props: {
      post: {
        ...post,
        content: mdxSource,
      },
      nextPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
