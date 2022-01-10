import Link from "next/link"

export default function PastQuestionNavigation({ otherdata }) {
    return (<div className="flex mt-4 md:mt-8 text-md md:text-xl pb-24">
        <Link href={`/pastquestions/${otherdata[0]}`}>
            <a className="hover:text-indigo-700 transition-colors">
                ← Previous
            </a>
        </Link>
        <div className="flex-1">
            {" "}
        </div>
        <Link href={`/pastquestions/${otherdata[1]}`}>
            <a className="hover:text-indigo-700 transition-colors">
                Next Question →
            </a>
        </Link>
    </div>)
}