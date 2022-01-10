import blockToText from "lib/blockToText";

export default function PastQuestionPageSEO({ questiondata, questionid }) {
  return (
    <>
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
        content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png"
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
        content="https://res.cloudinary.com/okezieuc/image/upload/studymono/covers/past-questions-cover-image_z13zcz.png"
      />
    </>
  );
}
