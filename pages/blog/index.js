import Head from "next/head";
import Layout from "@components/layout";
import Container from "@components/container";
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
        <div class="w-full pb-6 mx-auto space-y-5 sm:pb-8 md:pb-12 sm:space-y-8 md:space-y-16">
          <div class="bg-gray-100 pt-6 sm:pt-8 md:pt-12 pb-8">
            <Container>
              <h1 class="font-heading text-2xl sm:text-4xl md:text-6xl mb-4 md:mb-12 font-bold">
                Studymono <span class="text-indigo-700">Blog</span>
              </h1>
              <Featured />
            </Container>
          </div>
          <Container>
            <div class="flex grid grid-cols-12 pb-10 gap-x-8 gap-y-16">
              {allPosts.map((post) => (
                <BlogPostItem post={post} key={post.slug} />
              ))}
            </div>
          </Container>
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
