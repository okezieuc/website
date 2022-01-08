import Container from "@components/container";
import Layout from "@components/layout";
import PastQuestionHomeHero from "@components/pastquestions/home/pastQuestionHomeHero";
import PastQuestionHomeSubject from "@components/pastquestions/home/pastQuestionHomeSubject";
import { subjectSchema } from "lib/pastQuestionNamingSchema";

export default function PastQuestionHomePage() {
    return (
        <Layout>
            <PastQuestionHomeHero />
            <Container>
                <div className="grid sm:grid-cols-2 pb-20 border-b">
                    {
                        Object.keys(subjectSchema).map((key) => (
                            <PastQuestionHomeSubject key={key} subject={subjectSchema[key]} slug={key.toLowerCase()} />)
                        )
                    }
                </div>
            </Container>
        </Layout>
    )
}