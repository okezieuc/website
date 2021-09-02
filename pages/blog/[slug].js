import Layout from "@components/layout";
import BlogPostHeading from "@components/blog/blogPostHeading";
import { getPostBySlug, getAllPosts, getNextPosts } from "../../lib/api";

export default function BlogPost({ post }) {
  return (
    <Layout>
      <BlogPostHeading
        title={post.title}
        author={post.author}
        date={post.date}
      />
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

  const nextPosts = getNextPosts(params.slug);
  return {
    props: {
      post: {
        ...post,
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
