import Head from "next/head";
import blockToText from "lib/blockToText";

export default function PastQuestionPageSEO({ questiondata, questionid }) {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
        integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
        crossorigin="anonymous"
      />
      <title>
        {`${blockToText(questiondata.question)} ${
          !!questiondata.prompt ? questiondata.prompt : ""
        }—Studymono`.slice(0, 120)}{" "}
      </title>
      <meta
        property="og:title"
        content={`${blockToText(questiondata.question)} ${
          !!questiondata.prompt ? questiondata.prompt : ""
        }—Studymono`.slice(0, 120)}
      />
      <meta
        name="description"
        content={
          questiondata.explanation
            ? `${blockToText(questiondata.explanation).slice(0, 160)}`
            : `${blockToText(questiondata.question)} ${
                !!questiondata.prompt ? questiondata.prompt : ""
              } a. ${blockToText(questiondata.optiona)} b. ${blockToText(
                questiondata.optionb
              )} c. ${blockToText(questiondata.optionc)} d. ${blockToText(
                questiondata.optiond
              )}`.slice(0, 160)
        }
      />
      <meta
        property="og:description"
        content={
          questiondata.explanation
            ? `${blockToText(questiondata.explanation).slice(0, 160)}`
            : `${blockToText(questiondata.question)} ${
                !!questiondata.prompt ? questiondata.prompt : ""
              } a. ${blockToText(questiondata.optiona)} b. ${blockToText(
                questiondata.optionb
              )} c. ${blockToText(questiondata.optionc)} d. ${blockToText(
                questiondata.optiond
              )}`.slice(0, 160)
        }
      />
      <meta
        name="og:image"
        content="https://www.studymono.com/past-questions-cover.jpg"
      />
      <link
        rel="canonical"
        href={`https://www.studymono.com/pastquestions/${questionid}`}
      />
      <meta
        name="twitter:title"
        content={`${blockToText(questiondata.question)} ${
          !!questiondata.prompt ? questiondata.prompt : ""
        }—Studymono`.slice(0, 120)}
      />
      <meta
        name="twitter:description"
        content={
          questiondata.explanation
            ? `${blockToText(questiondata.explanation).slice(0, 160)}`
            : `${blockToText(questiondata.question)} ${
                !!questiondata.prompt ? questiondata.prompt : ""
              } a. ${blockToText(questiondata.optiona)} b. ${blockToText(
                questiondata.optionb
              )} c. ${blockToText(questiondata.optionc)} d. ${blockToText(
                questiondata.optiond
              )}`.slice(0, 160)
        }
      />

      <meta
        name="twitter:image"
        content="https://www.studymono.com/past-questions-cover.jpg"
      />
    </Head>
  );
}
