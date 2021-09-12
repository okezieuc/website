import Head from "next/head"
import Image from "next/image";
import Layout from "@components/layout";
import Hero from "@components/landing/hero";
import Intro from "@components/landing/intro";
import Features from "@components/landing/features";
import CTA from "@components/landing/cta";
import FAQ from "@components/landing/faq";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Studymono - Educational Resources for Nigerian Students</title>
        <meta
          name="description"
          content="Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face"
        />
        <meta
          property="og:title"
          content="Studymono - Educational Resources for Nigerian Students"
        />
        <meta
          property="og:description"
          content="Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face"
        />
        <meta
          property="og:image"
          content="https://www.studymono.com/cover.png"
        />
        <link rel="canonical" href="https://www.studymono.com" />
        <meta
          name="twitter:title"
          content="Studymono - Educational Resources for Nigerian Students"
        />
        <meta
          name="twitter:description"
          content="Studymono is an online collection of past questions and articles that will help you to be better prepared for any exam you face"
        />
        <meta
          name="twitter:image"
          content="https://www.studymono.com/cover.png"
        />
      </Head>

      <Hero />
      <Intro />
      <Features />
      <FAQ />
      <CTA />
    </Layout>
  );
}
