import Head from "next/head";
import Layout from "@components/app/layout";
import Option from "@components/app/pastquestions/option";
import QuestionLayout from "@components/app/pastquestions/questionLayout";
import Answer from "@components/app/pastquestions/answer";
import blockToText from "../../lib/blockToText"
import sanity from "../../lib/sanity";

export default function PastQuestionPage({ questiondata }) {
  const metaDescription = questiondata.explanation
    ? `${blockToText(questiondata.explanation).slice(0, 160)}`
    : `${blockToText(questiondata.question)} ${
        !!questiondata.prompt ? questiondata.prompt : ""
      } a. ${blockToText(questiondata.optiona)} b. ${blockToText(
        questiondata.optionb
      )} c. ${blockToText(questiondata.optionc)} d. ${blockToText(
        questiondata.optiond
      )}`.slice(0, 160);

  const metaTitle = `${blockToText(questiondata.question)} ${
    !!questiondata.prompt ? questiondata.prompt : ""
  }—Studymono`.slice(0, 120);

  const metaCoverImage = `https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png`;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossorigin="anonymous"
        />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://www.studymono.com/pastquestions/${questiondata._id}`}
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="og:image" content={metaCoverImage} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaCoverImage} />
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
