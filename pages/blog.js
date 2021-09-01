import Layout from "@components/layout";
import Featured from "@components/blog/featured";
import BlogPostItem from "@components/blog/blogPostItem";

export default function Blog() {
  return (
    <Layout>
      <section class="bg-white">
        <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <Featured />
          <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
          </div>
        </div>
      </section>
    </Layout>
  );
}
