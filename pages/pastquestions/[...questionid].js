import Head from "next/head";
import Layout from "@components/app/layout";
import Option from "@components/app/pastquestions/option";
import QuestionLayout from "@components/app/pastquestions/questionLayout";
import Answer from "@components/app/pastquestions/answer";
import sanity from "../../lib/sanity";

export default function PastQuestionPage({ questiondata }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossorigin="anonymous"
        />
      </Head>
      <Layout>
        <QuestionLayout question={questiondata} />
        <Answer
          answer={questiondata.answer}
          explanation={questiondata.explanation}
        />
      </Layout>
    </>
  );
}

const questionQuery = `*[_type == "pastquestion" && _id == $id && !(_id in path('drafts.**'))]{
  _id,
  exam,
  subject,
  year,
  'prompt': prompt->prompt,
  question,
  optiona, optionb, optionc, optiond, optione,
	answer, explanation,
}`;

export async function getServerSideProps({ params }) {
  const questionid = params.questionid[0];
  let questiondata = await sanity.fetch(questionQuery, { id: questionid });
  questiondata = questiondata[0];

  return {
    props: {
      questionid,
      questiondata,
    },
  };
}
