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
        <Hero />
        <Intro />
        <Features />
        <FAQ />
        <CTA />
    </Layout>
  );
}
