import SanityBlockContent from "@sanity/block-content-to-react";
import KaTeX from 'katex';

const LaTex = (props) => {
    const latex = props.node.body || '';
    const isInline = !!props.isInline;
    const html = KaTeX.renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false,
    })
    if (isInline) {
        return <span dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

const serializers = {
    types: {
        latex: LaTex,
    },
}

const PastQuestionBlockContent = ({ body }) => (<SanityBlockContent
    blocks={body}
    serializers={serializers}
/>)

export default PastQuestionBlockContent