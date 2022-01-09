import Container from "@components/container"

export default function PastQuestionPageHero({subject, page}) {
    return (<div className="bg-gray-100 pt-12 md:pt-20 pb-32 md:pb-64 -mb-24 md:-mb-48">
        <Container>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-heading">
                {subject}
            </h1>
            <div className="font-sm md:font-md">
                {subject} past questions and answers from WAEC and JAMB
            </div>
            <div className="font-sm md:font-md">
                Page {page}
            </div>
        </Container>
    </div>)
}