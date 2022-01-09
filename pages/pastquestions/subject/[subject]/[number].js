import { sanitySubjectPageQuery, sanitySubjectPageCountQuery } from "lib/sanityQueries";
import { subjectSchema } from "lib/pastQuestionNamingSchema";
import sanity from "lib/sanity";
import Layout from "@components/layout";
import { useRouter } from 'next/router';
import PastQuestionPageHero from "@components/pastquestions/page/pastQuestionPageHero";
import PastQuestionCard from "@components/pastquestions/list/pastQuestionCard";
import Container from "@components/container";
import ListPagination from "@components/pastquestions/list/listPagination";

export default function PastQuestionSubjectPage({ subjectdata, count }) {
  const router = useRouter()
  const { subject, number } = router.query

  return (<Layout>
    <PastQuestionPageHero subject={subjectSchema[subject.toUpperCase()]} page={number} />
    <Container>
      {
        subjectdata.map((question) => <PastQuestionCard questionid={question._id} questionData={question} key={question._id} />)
      }
      <ListPagination prefix={`/pastquestions/subject/${subject.toLowerCase()}/`}
        current={parseInt(number)} total={Math.floor((count - 1) / 4) + 1} />
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