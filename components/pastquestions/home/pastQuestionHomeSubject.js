import Link from "next/link";
import Image from "next/image";

export default function PastQuestionHomeSubject({ subject, slug }) {
  return (
    <div className="my-6 sm:my-12">
      <div className="flex gap-4 items-center">
        <div>
          <Image src={`/subjectcovers/${slug}.png`} width={96} height={96} />
        </div>
        <div>
          <div className="text-3xl font-heading">
            <Link href={`/pastquestions/subject/${slug}/1`}>{subject}</Link>
          </div>
          <div classname="mt-4">View {subject} Past Questions</div>
        </div>
      </div>
    </div>
  );
}
