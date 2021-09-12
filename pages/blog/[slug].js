import Head from "next/head"
import Layout from "@components/layout";
import BlogPostHeading from "@components/blog/blogPostHeading";
import { getPostBySlug, getAllPosts, getNextPosts } from "../../lib/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} - Studymono Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - Studymono Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/blog/${post.cover}`}
        />

        <meta name="twitter:title" content={`${post.title} - Studymono Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={`https://res.cloudinary.com/okezieuc/image/upload/studymono/blog/${post.cover}`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
						"@context": "https://schema.org",
						"@type": "NewsArticle",
						"headline": "${post.title}",
						"image": [
							"https://res.cloudinary.com/okezieuc/image/upload/studymono/blog${post.cover}"
						 ],
						"datePublished": "${post.date}",
						"dateModified": "${post.date}",
						"author": {
							"@type": "Person",
							"name": "${post.author}"
						},
						"publisher": {
							"@type": "Organization",
							"name": "Company Name",
							"logo": {
								"@type": "ImageObject",
								"url": "https://google.com/logo.jpg"
							}
						}
				}`,
          }}
        ></script>
        <link rel="canonical" href={`https://www.studymono.com/blog/${slug}`} />
      </Head>
      <BlogPostHeading
        title={post.title}
        author={post.author}
        date={post.date}
      />
      <article class="prose sm:prose lg:prose-lg xl:prose-2xl px-4 mx-auto my-12">
        <MDXRemote {...post.content} />
      </article>
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
