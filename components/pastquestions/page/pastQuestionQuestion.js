import { PastQuestionAnswerCard } from "./pastQuestionAnswerCard"
import PastQuestionBlockContent from "./pastQuestionBlockContent"

export default function PastQuestionQuestion({ data }) {
    return (<div>
        {
            data.prompt ?
                <h1 className="text-lg sm:text-xl md:text-2xl mb-1 md:mb-4 leading-5">
                    {data.prompt}
                </h1>
                : null
        }
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-8 leading-5">
            <PastQuestionBlockContent
                body={data.question}
            />
        </h1>
        <Option option="a" body={data.optiona} />
        <Option option="b" body={data.optionb} />
        <Option option="c" body={data.optionc} />
        <Option option="d" body={data.optiond} />
        <PastQuestionAnswerCard answer={data.answer} explanation={data.explanation} />
    </div>)
}

const Option = ({ option, body }) => (<div className="flex my-2 md:my-4">
    <div className="font-bold text-md md:text-xl">{option}.</div>
    <div className="text-md sm:text-lg md:text-2xl ml-2 md:ml-4">
        <PastQuestionBlockContent
            body={body}
        />
    </div>
</div>)