import BlockContent from "../blockContent";
import Option from "./option";

export default function QuestionLayout({ question }) {
  return (
    <div>
      <p class="text-lg md:text-xl mb-4 md:mb-6">
        <BlockContent body={question.prompt} />
      </p>
      <h1 class="text-2xl md:text-4xl leading-snug">
        <BlockContent body={question.question} />
      </h1>
      <div class="my-8">
        <Option option="a" value={question.optiona} />
        <Option option="b" value={question.optionb} />
        <Option option="c" value={question.optionc} />
        <Option option="d" value={question.optiond} />
      </div>
    </div>
  );
}
