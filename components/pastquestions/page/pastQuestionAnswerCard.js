import PastQuestionBlockContent from "./pastQuestionBlockContent";

export const PastQuestionAnswerCard = ({ answer, explanation }) => (<div className="rounded-md">
    <div className={`bg-indigo-700 p-6 md:p-12 text-sm sm:text-lg md:text-xl mt-8 md:mt-20 text-white rounded-t-md ${explanation ? "" : "rounded-b-md"}`}>
        {
            answer ? `Correct answer: ${answer}` : "No Answer Submitted"
        }
    </div>
    {
        explanation
            ? <>
                <div className="p-6 md:p-12 bg-white text-sm sm:text-lg md:text-xl border border-indigo-700 border-b-md paragraph-space rounded-b-md">
                    <PastQuestionBlockContent
                        body={explanation}
                    />
                </div>
            </>
            : ""
    }

</div>)