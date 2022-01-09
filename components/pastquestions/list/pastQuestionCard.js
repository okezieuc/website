import Link from "next/link"
import PastQuestionBlockContent from "../page/pastQuestionBlockContent"

export default function PastQuestionCard({ questionid, questionData }) {
    return (
        <Link href={`/pastquestions/${questionid}`}>
            <a>
                <div className="bg-white p-4 md:p-8 mb-8 md:mb-20 border rounded-lg shadow-lg">
                    <div className="mb-4">
                        {
                            questionData.prompt ?
                                <div className="text-sm md:text-xl font-semibold mb-1 md:mb-2">
                                    {questionData.prompt}
                                </div>
                                : null
                        }

                        <div className="text-lg md:text-3xl">
                            <Link href={`/pastquestions/${questionid}`}>
                                <a>
                                    <PastQuestionBlockContent
                                        body={questionData.question}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <PastQuestionCardOption option='a' blocks={questionData.optiona} />
                    <PastQuestionCardOption option='b' blocks={questionData.optionb} />
                    <PastQuestionCardOption option='c' blocks={questionData.optionc} />
                    <PastQuestionCardOption option='d' blocks={questionData.optiond} />

                </div>
            </a>
        </Link>
    )
}

const PastQuestionCardOption = ({ option, blocks }) => (<div className="flex my-2 md:my-4">
    <div className="text-md md:text-xl">
        {option}.
    </div>
    <div className="text-md md:text-2xl ml-4 md:ml-4">
        <PastQuestionBlockContent
            body={blocks}
        />
    </div>
</div>)