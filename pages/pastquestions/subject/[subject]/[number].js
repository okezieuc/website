import { sanitySubjectPageQuery, sanitySubjectPageCountQuery } from "lib/sanityQueries";
import { subjectSchema } from "lib/pastQuestionNamingSchema";
import sanity from "lib/sanity";
import Layout from "@components/layout";
import PastQuestionPageHero from "@components/pastquestions/page/pastQuestionPageHero";
import PastQuestionCard from "@components/pastquestions/list/pastQuestionCard";
import Container from "@components/container";

export default function PastQuestionSubjectPage({ subjectdata, count }) {
  return (<Layout>
    <PastQuestionPageHero />
    <Container>
      {
        subjectdata.map((question) => <PastQuestionCard questionid={question._id} questionData={question} key={question._id} />)
      }
    </Container>
  </Layout>)
}

export async function getStaticPaths() {
  let paths = []

  for (let num = 0; num < Object.keys(subjectSchema).length; num++) {
    const subject = Object.keys(subjectSchema)[num]
    const count = await sanity.fetch(sanitySubjectPageCountQuery, {
      subject: subject.toUpperCase(),
    })
    const pageCount = Math.floor((count - 1) / 4) + 1
    for (let i = 0; i < pageCount; i++) {
      paths.push({ params: { subject: subject.toLowerCase(), number: String(i + 1) } })
    }
  }

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const subject = params.subject
  const page = params.number
  const subjectdata = await sanity.fetch(sanitySubjectPageQuery, {
    subject: subject.toUpperCase(),
    lower: 4 * (page - 1),
    higher: 4 * (page)
  })
  const count = await sanity.fetch(sanitySubjectPageCountQuery, {
    subject: subject.toUpperCase()
  })

  return {
    props: {
      subjectdata,
      count,
    }
  }
}