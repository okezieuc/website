import Head from "next/head"
import Layout from "@components/layout";
import Featured from "@components/blog/featured";
import BlogPostItem from "@components/blog/blogPostItem";
import { getAllPosts } from "../../lib/api";

export default function Blog({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>
          The Studymono Blog - Studymono Announcements, Tips and Educational
          News
        </title>
        <meta
          name="description"
          content="The Studymono Blog is a channel we created to reach out to students and everyone in education with education tips and news, and talk about new features on Studymono."
        />
        <meta
          property="og:title"
          content="The Studymono Blog - Studymono Announcements, Tips and Educational News"
        />
        <meta
          property="og:description"
          content="The Studymono Blog is a channel we created to reach out to students and everyone in education with education tips and news, and talk about new features on Studymono."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/blog-cover-image_wfyirk.png"
        />
        <link rel="canonical" href="https://www.studymono.com/blog" />
        <meta
          name="twitter:title"
          content="The Studymono Blog - Studymono Announcements, Tips and Educational News"
        />
        <meta
          name="twitter:description"
          content="The Studymono Blog is a channel we created to reach out to students and everyone in education with education tips and news, and talk about new features on Studymono."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/blog-cover-image_wfyirk.png"
        />
      </Head>

      <section class="bg-white">
        <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <Featured />
          <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            {allPosts.map((post) => (
              <BlogPostItem post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "cover",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
