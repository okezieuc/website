import Link from "next/link"

export default function PastQuestionHomeSubject({ subject, slug }) {
    return (<div className="my-4 sm:my-12">
        <div className="text-3xl font-heading">
            <Link href={`/pastquestions/subject/${slug}/1`}>{subject}</Link>
        </div>
        <div classname="mt-4">
            View {subject} Past Questions
        </div>
    </div>)
}