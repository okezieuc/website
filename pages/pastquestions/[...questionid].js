import sanity from "lib/sanity"
import { sanityPastQuestionIdQuery, sanityPastQuestionQuery, sanitySimilarPastQuestionIdQuery } from "lib/sanityQueries"

export default function PastQuestionPage({ questiondata, otherdata, questionid }) {
    return (<div>past question comes here</div>)
}

export async function getStaticPaths() {
    let paths = []
    const questionIdList = await sanity.fetch(sanityPastQuestionIdQuery)

    for (let id = 0; id < questionIdList.length; id++) {
        paths.push({ params: { questionid: [questionIdList[id]] } })
    }
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const questionid = params.questionid[0]
    // fetch data for the current question
    let questiondata = await sanity.fetch(sanityPastQuestionQuery, {
        questionid
    })
    questiondata = questiondata[0]
    // fetch questions that would be linked to as next and previous
    const allSimilarQuestionId = await sanity.fetch(sanitySimilarPastQuestionIdQuery, {
        exam: questiondata.exam,
        subject: questiondata.subject,
        year: questiondata.year
    })
    const [questionLocationIndex, total] = [allSimilarQuestionId.findIndex((item) => item._id == questionid), allSimilarQuestionId.length]
    const [previous, next] = [(questionLocationIndex - 1 + total) % total, (questionLocationIndex + 1) % total]
    const otherdata = [allSimilarQuestionId[previous]._id, allSimilarQuestionId[next]._id]
    return {
        props: {
            questiondata,
            otherdata,
            questionid,
        }
    }
}
